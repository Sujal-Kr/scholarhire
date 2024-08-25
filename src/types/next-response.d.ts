import { NextRequest } from "next/server";

declare module NextRequest{
    interface Id{
        id:string,
    }
}