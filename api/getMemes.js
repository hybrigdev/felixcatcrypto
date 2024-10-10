import { readdirSync } from 'fs';
import { join } from 'path';

export default function handler(req, res) {
  // Define the path to the memes folder
  const memesDirectory = join(process.cwd(), '../assets/memes');

  // Read all filenames in the directory
  const filenames = readdirSync(memesDirectory);

  // Send the filenames back as a JSON response
  res.status(200).json(filenames);
}
