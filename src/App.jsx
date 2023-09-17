import './App.css'
import Listings from './components/Listings'

const App = () => {
  const entries = [
    {name: "CS50", imgSrc: "https://pll.harvard.edu/sites/default/files/styles/16_9_medium/public/course/CS50x_pll.png?itok=PJhUTe4g", url: "https://cs50.harvard.edu/x/2023/"},
    {name: "CS50's Web Programming with Python and Javascript", imgSrc: "https://prod-discovery.edx-cdn.org/media/course/image/8f8e5124-1dab-47e6-8fa6-3fbdc0738f0a-4978ad93b1c3.small.png", url: "https://cs50.harvard.edu/web/2020/"},
    {name: "The Odin Projcet", imgSrc: "https://www.theodinproject.com/assets/og-logo-dc2c719e367496ffaee876882b3f62c9b139279824de6a6e16448398fa513f7a.png", url: "https://www.theodinproject.com/"},
    {name: "CodePath", imgSrc: "https://images.crunchbase.com/image/upload/c_lpad,f_auto,q_auto:eco,dpr_1/wfsonfv0p92plryzwijf", url: "https://www.codepath.org/"},
    {name: "Princeton Algorithms Part 1", imgSrc: "https://s3.amazonaws.com/coursera_assets/meta_images/generated/XDP/XDP~COURSE!~algorithms-part1/XDP~COURSE!~algorithms-part1.jpeg", url: "https://www.coursera.org/learn/algorithms-part1"},
    {name: "Princeton Algorithms Part 2", imgSrc: "https://s3.amazonaws.com/coursera_assets/meta_images/generated/XDP/XDP~COURSE!~algorithms-part2/XDP~COURSE!~algorithms-part2.jpeg", url: "https://www.coursera.org/learn/algorithms-part2"},
    {name: "MIT OpenCourseWare", imgSrc: "https://imagecdn.mightycause.com/eee7e183-b470-48f5-9729-e4cb0a1dbf9d/-/crop/1280x719/0,0/-/preview/", url: "https://ocw.mit.edu/"},
    {name: "CS61A", imgSrc: "https://cs61a.org/assets/images/logo.png", url: "https://cs61a.org/"},
    {name: "CS61B", imgSrc: "https://avatars.githubusercontent.com/u/9814088?s=280&v=4", url: "https://fa23.datastructur.es/"},
    {name: "CS61C", imgSrc: "https://cs61c.org/fa23/img/favicon.png", url: "https://cs61c.org/fa23/"},
  ]
  return (
    <div className="App">
      <h1>Free CS Learning Resources</h1>
      <Listings entries={entries} />
    </div>
  )
}

export default App
