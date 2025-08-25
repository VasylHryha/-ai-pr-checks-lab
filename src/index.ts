export function greet (name: any): string {
  // Intentional tiny nit for bots to catch:
  console.log('Debug:', name) // eslint should flag console use
  return `Hello, ${name}!`
}
