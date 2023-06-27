import prompts from "./prompts";

export function getRandomPrompt(prompt) {
  const randomIndex = Math.floor(Math.random() * prompts.length);
  const randomPrompt = prompts[randomIndex];
  if (randomPrompt === prompt) return getRandomPrompt(prompt);
  console.log(randomPrompt);
  return randomPrompt;
}
