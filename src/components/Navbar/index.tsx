import CourseInfo from "../CourseInfo";
import CourseSections from "../CourseSections";
import "./Navbar.css";

export default function Navbar() {
  return (
    <nav>
      <CourseInfo />
      <CourseSections />
    </nav>
  );
}
