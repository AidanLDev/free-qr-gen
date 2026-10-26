import { render, screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { toast } from 'react-toastify'
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest'
import FeedbackForm from './FeedbackForm'

vi.mock('react-toastify', () => ({ toast: vi.fn() }))

describe('FeedbackForm', () => {
  beforeEach(() => {
    window.scrollTo = vi.fn()
  })

  afterEach(() => {
    vi.unstubAllGlobals()
    vi.clearAllMocks()
  })

  it('posts the feedback, thanks the user and closes', async () => {
    const fetch = vi.fn().mockResolvedValue({ ok: true })
    vi.stubGlobal('fetch', fetch)
    const setOpen = vi.fn()
    render(<FeedbackForm feedbackFormOpen setFeedbackFormOpen={setOpen} />)

    await userEvent.type(screen.getByRole('textbox', { name: 'Feedback' }), 'Love it')
    await userEvent.click(screen.getByRole('button', { name: 'Submit feedback' }))

    expect(fetch).toHaveBeenCalledWith(
      'api/send-feedback',
      expect.objectContaining({ method: 'POST', body: JSON.stringify({ feedback: 'Love it' }) }),
    )
    await waitFor(() => expect(setOpen).toHaveBeenCalledWith(false))
    expect(toast).toHaveBeenCalledWith(expect.stringContaining('Feedback sent'), {
      type: 'success',
    })
    expect(screen.getByRole('textbox', { name: 'Feedback' })).toHaveValue('')
  })

  it('stays open and keeps the text when sending fails', async () => {
    const fetch = vi.fn().mockResolvedValue({ ok: false })
    vi.stubGlobal('fetch', fetch)
    const setOpen = vi.fn()
    render(<FeedbackForm feedbackFormOpen setFeedbackFormOpen={setOpen} />)

    await userEvent.type(screen.getByRole('textbox', { name: 'Feedback' }), 'Bug')
    await userEvent.click(screen.getByRole('button', { name: 'Submit feedback' }))

    await waitFor(() => expect(fetch).toHaveBeenCalledOnce())
    expect(setOpen).not.toHaveBeenCalled()
    expect(toast).not.toHaveBeenCalled()
    expect(screen.getByRole('textbox', { name: 'Feedback' })).toHaveValue('Bug')
  })

  it('clears and closes from the close button', async () => {
    const setOpen = vi.fn()
    render(<FeedbackForm feedbackFormOpen setFeedbackFormOpen={setOpen} />)

    await userEvent.type(screen.getByRole('textbox', { name: 'Feedback' }), 'Draft')
    await userEvent.click(screen.getByRole('button', { name: 'Close feedback form' }))

    expect(setOpen).toHaveBeenCalledWith(false)
    expect(screen.getByRole('textbox', { name: 'Feedback' })).toHaveValue('')
  })
})
