"use server";
import fs from "fs";
import queue from "../queue.json" with {type:"json"}
import { resolve } from "path";

export default async function saveEmail(email: string) {
  try {
 
    const newQueue=queue.emails as string[]
    newQueue.push(email)

    await fs.writeFile(resolve(`src/app/lib/queue.json`),JSON.stringify({

      emails:newQueue,
    }),(err)=>{
      console.log(err)
    })

  } catch (e) {
    if (e instanceof Error) {
      console.log(e.message);
    }
  }
}
