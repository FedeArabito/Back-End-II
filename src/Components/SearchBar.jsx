import { useState } from "react"
import { Search } from 'lucide-react'
import { Input } from  "./ui/input.tsx"
import { Button } from "./ui/button.tsx"

export function SearchBar() {
  const [query, setQuery] = useState("")

  const handleSubmit = (event) => {
    event.preventDefault()
    // TODO: Implement search functionality
    console.log("Searching for:", query)
  }

  return (
    <form onSubmit={handleSubmit} className="flex w-full max-w-sm items-center space-x-2">
      <Input
        type="search"
        placeholder="Search..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="flex-grow"
      />
      <Button type="submit" size="icon" aria-label="Search">
        <Search className="h-4 w-full object-contain text-muted-foreground text-white" />
      </Button>
    </form>
  )
}

export default SearchBar