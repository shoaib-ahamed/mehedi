export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="py-6 border-t">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-center text-sm text-muted-foreground">© {currentYear} Mehedi Hasan. All rights reserved.</p>
      </div>
    </footer>
  )
}

