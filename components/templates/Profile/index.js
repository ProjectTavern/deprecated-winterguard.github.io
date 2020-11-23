import { StyledProfile } from "./private.Profile.styled";

const Profile = ({}) => {
  return (
    <StyledProfile>
      <h2>Profile</h2>
      <section>
        <section className="skills">
          <h3>Skills</h3>
          <dl>
            <dt>
              <div>HTML/CSS/Javascript Image</div>
              <strong>HTML/CSS/Javascript</strong>
            </dt>
            <dd></dd>
            <dt>
              <div>VueJS Image</div>
              <strong>VueJS</strong>
            </dt>
            <dd></dd>
            <dt>
              <div>Nuxt Image</div>
              <strong>Nuxt</strong>
            </dt>
            <dd></dd>
            <dt>
              <div>React Image</div>
              <strong>React</strong>
            </dt>
            <dd></dd>
            <dt>
              <div>Next Image</div>
              <strong>Next</strong>
            </dt>
            <dd></dd>
          </dl>
        </section>
        <section className="projects">
          <h3>History</h3>
          <ul>
            <li>
              <strong>KH 정보교육원</strong>
              <time>2017-01-12</time> ~ <time>2017-06-20</time>
              <p></p>
            </li>
            <li>
              <strong>DKTechin</strong>
              <time>2018-01-02</time> ~ <time>Present</time>
              <p></p>
            </li>
          </ul>
        </section>
        <section className="projects">
          <h3>Projects</h3>
          <ul>
            <li>
              <strong>다음 검색</strong>
              <p></p>
            </li>
            <li>
              <strong>다음 검색</strong>
              <p></p>
            </li>
          </ul>
        </section>
      </section>
    </StyledProfile>
  );
};

export default Profile;
