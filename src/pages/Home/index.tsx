import CourseCard from '../../components/CourseCard'
import './Home.css'

export default function Home() {
  return (
    <main className="home">
      <section className="content">
        <div className="container">
          
          <div className="row mb-5">
              <form className="d-flex" role="search">
                <input
                  className="form-control me-2"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                />
                <button className="btn btn-outline-success" type="submit">
                  Search
                </button>
              </form>
          </div>

          <div className="row d-flex justify-content-center">
                <CourseCard />
                <CourseCard />
                <CourseCard />
          </div>
          
        </div>
      </section>
    </main>
  );
}
