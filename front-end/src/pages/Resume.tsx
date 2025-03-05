import Header from "@/components/Header"

const Resume = () => {
  return (
    <div >
      <Header />
      <iframe src="/resume.pdf" width="100%" height="100%" className="absolute"></iframe>
    </div>
  )
}

export default Resume