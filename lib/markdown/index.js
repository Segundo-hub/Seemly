import fs from "fs"
import { join } from "path"
import matter from "gray-matter"

const MOTTER_DIRECTORY = join(process.cwd(), "content")

export const getMakrdownFiles = ({ directory, file }) => {
   const mark = fs.readFileSync(`${MOTTER_DIRECTORY}/${directory}/${file}.md`, { encoding: "utf-8" })
   const data = matter(mark)
   return { ...data, mark }
}

export const getPathDirectories = ({ directory }) => {
   const path = join(MOTTER_DIRECTORY, directory)
   return {
      dir: fs.readdirSync(path),
   }
}
