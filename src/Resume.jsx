export function Resume() {
  return (
    <div id="Resume">
      <h1 className="text-center text-uppercase">Joe Schmoe</h1>
      <h1 className="text-center text-uppercase">Software Engineer Extraordinaire</h1>
      <p className="text-center">
        Metropolis, USA | 123-456-7890 | joeschmoe@test.com | github.com/joeschmoe | linekdin/com/in/joe-schmoe
      </p>

      <div className="row row-cols-1 row-cols-md-1 g-4">
        <div className="col">
          <div className="card">
            <div className="card-body">
              <h4 className="card-title">Skills</h4>
              <p className="card-text">Languages: Go, Python, Java, Rust</p>
              <p className="card-text">Databases/Tools: Git, APIsm Postgres</p>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card">
            <div className="card-body">
              <h4 className="card-title">Coding Projects</h4>
              <p className="card-text">
                Superman Tracker: A fullstack application that allows signup and login. Users can report their
                coordinates using their cellphone, and record a video or take a picture of Superman which is displayed
                on the app's map as a pin. Pins are ordered using opacity from oldest (lower opacity) to newest (higher
                opacity) and refreshed every day.
              </p>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card">
            <div className="card-body">
              <h4 className="card-title">Education</h4>
              <p className="card-text">
                Metropolis University | Bachelor of Science in Computer Science with a Minor in Journalism
              </p>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card">
            <div className="card-body">
              <h4 className="card-title">Job Experience</h4>
              <p className="card-text">Junior Software Engineer | LexCorp February 2023 - Present</p>
              <p className="card-text">Intern | Daily Planet September 2022 - February 2023</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
