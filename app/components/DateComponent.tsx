export default function DateComponent() {
    const formatted = new Date().toLocaleDateString()
  return (
    <div>{ formatted }</div>
  )
}
