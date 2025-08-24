import { NextResponse } from "next/server"

export async function POST(req: Request) {
  const { name, email, message } = await req.json()
  if (!name || !email || !message) {
    return NextResponse.json({ ok: false, error: "Faltan campos" }, { status: 400 })
  }
  return NextResponse.json({ ok: true })
}
