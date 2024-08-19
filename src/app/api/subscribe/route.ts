import { NextRequest, NextResponse } from 'next/server'
import { validateEmail } from '@/app/lib/helpers'
import {
  DynamoDBClient,
  PutItemCommand,
  PutItemCommandInput,
} from '@aws-sdk/client-dynamodb'
import { randomUUID } from 'crypto'

const dynamoClient = new DynamoDBClient({
  region: 'us-east-1',
  credentials: {
    accessKeyId: process.env.MY_AWS_ACCESS_KEY_ID!,
    secretAccessKey: process.env.MY_AWS_SECRET_ACCESS_KEY!,
  },
})

async function handler(req: NextRequest) {
  const body = await req.json()
  const { email } = body
  if (!validateEmail(email)) {
    console.error('Email address is not valid: ', email)
    return NextResponse.json(
      {
        message: 'Invalid email address',
      },
      { status: 400 }
    )
  }
  // Email validation
  try {
    const dynamoInput: PutItemCommandInput = {
      TableName: 'NewsLetterSubscribers',
      Item: {
        ID: { S: randomUUID() },
        Email: { S: email },
        CreatedDate: { S: new Date().toISOString() },
        Subscribed: { BOOL: true },
      },
    }

    const dynamoPutCommand = new PutItemCommand(dynamoInput)

    const putItemResponse = await dynamoClient.send(dynamoPutCommand)

    if (putItemResponse.$metadata.httpStatusCode === 200) {
      return NextResponse.json(
        {
          message: 'Successfully subscribed to the newsletter',
        },
        {
          status: 200,
        }
      )
    } else {
      return NextResponse.json(
        { message: 'Failed to put item into Dynamo' },
        { status: 500 }
      )
    }
  } catch (err) {
    console.error(err)
    return NextResponse.json({
      message: 'Failed to subscribe',
    })
  }
}

export { handler as GET, handler as POST }
