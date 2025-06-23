import { NextResponse } from "next/server";
//import { prisma } from "@/lib/prisma";
import { PrismaClient } from "@prisma/client";

export async function GET() {
    const prisma = PrismaClient();
    const livros = await prisma.Livros.findMany();
    return NextResponse.json(livros);
}