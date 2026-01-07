import { NextResponse } from "next/server";

const TODO_FIELDS = ["email", "phone", "password", "locale"] as const;

export async function POST() {
  return NextResponse.json(
    {
      success: false,
      todo: TODO_FIELDS,
    },
    { status: 501 },
  );
}
