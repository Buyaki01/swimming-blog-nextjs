import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

const postsDirectory = path.join(process.cwd(), 'blogposts') //cwd: current working directory

export function getSortedPostsData() {
  // readdirSync(postsDirectory):  It reads the contents of a directory and returns an array of file and directory names found in that directory.
  // It does this synchronously, meaning the code will pause and wait until the reading operation is complete before moving on to the next line.
  const fileNames = fs.readdirSync(postsDirectory) //"fs," which stands for "file system. It provides functions for interacting with files and directories on your computer.
  const allPostsData = fileNames.map((fileName) => {
    // Remove ".md" from file name to get id
    const id = fileName.replace(/\.md$/, '') // The / is used to indicate the start and end of the pattern. The backslash \ is an escape character, It is used to indicate that the following character (.) should be treated as a literal period (dot). In regular expressions, the dot . is a special character that matches any single character. The dollar sign $ has a special meaning in regular expressions. It represents the end of a line or string.

    // Read markdown file as string
    const fullPath = path.join(postsDirectory, fileName)
    const fileContents = fs.readFileSync(fullPath, 'utf-8') //utf-8: This is an optional argument that specifies the encoding of the file being read. In this case, it's set to 'utf-8', which is a common encoding for text files. This means that the file's contents will be read as text and stored as a string in the fileContents variable.

    // Use gray-matter to parse the post metadata section
    const matterResult = matter(fileContents)

    const blogPost: BlogPost = {
      id,
      title: matterResult.data.title,
      date: matterResult.data.date,
    }

    // Combine the data with the id
    return blogPost
  })

  // Sort posts by date
  return allPostsData.sort((a,b) => a.date < b.date ? 1 : -1)
}
