import React from "react";
import { StyledProfile, StyledSkillSection } from "./private.Profile.styled";

const skills = [
  {
    title: "HTML/CSS/Javascript",
    imageAddress:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/1200px-HTML5_logo_and_wordmark.svg.png",
  },
  {
    title: "VueJS",
    imageAddress: "https://upload.wikimedia.org/wikipedia/commons/f/f1/Vue.png",
  },
  {
    title: "NuxtJS",
    imageAddress:
      "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJcAAABBCAMAAADrJsZ5AAAAtFBMVEX///9BuIM1SV47gHA8VWX6+/xOXnG0usKfpq84TGFhcH87gnFMvYqkrLTEyc01Rl2RmaMTMk3b3uJGh3hyfYtCvYU1Qlzk5unu+fT3/PoztHyAzakmd2U0Pls3YGUyfGs5bmrQ1NgAKUeU1reu38ggsXXZ8OVrxpvD59af2b1imIyWtq+sxsBzoZaIraXM3Njd6OU/pXw9lHY4Z2i+085Ar4A6dm0+nHk1WWIAH0ElPlaAipUtsnHJAAADIklEQVRoge2WbXuaMBSGAxgULIKoQ6lKwc63ruvquq6F//+/BoSEJNLqrstw+sHnQ+XF1rsPxztB6CJZXebPXDr339fQCE2ZauEGmqEpq1ALt9AQx1mHmqbdzOgphmThs8mxtHBXnc32XwRsW9SVg03J6cP8BywPjUYS3pZn07kRzU78RivZhRSsdMVjZEQ/oZlQ4QiWwhVPkWEY81/QVAjdhoyrcMW+4Ir20FTEESzoZW4Umb9Ac214rHA1MkhGwKO/FeqavL72CRewK2Y3PJb2vHiruIw5aGE7sa6l695VYKCumAptTQ7fdL1j0MIAXXEr1KV1XF13f9PC4FwhOmLSz+vKwwoDc4U49H8WJZa7pKM/AtpX3EuOcHUCxlzxAIIlOmLyTJ5izsVcEU0huI4coVMw5opHACxp6A8LncVio//UPleDI1hhgK5odgQNG/3WXdHoCFbYG5QrJEfciXWBuULeR0hYusuWyXZdsRKHfunqMhiIK2RHyHUVrugDuEJyxDGV4IrWRl+qy2ioi3dFa1tqyRHNWLUr+i1tqWVHHA295IqoHVdIm+e/zXUVrmD7ila21JIj3j6oq21XrLUbPger83FGVQyAfcU111xzzRdPENfHuDr2u/w7HLKf4a/FQXnD4+JfmKs3DNjxICUIPZN7A07Kj8RWxi4F7yWkNy7imuXL4OJcds1lES7H5t6Ah6QK/519tDnm7ptCuZfjMi3vLC7kpFWzXsrvVFVx2X5CR+xzLmSTy4N3biQVctX//wmuIO2xn21wsXk5wUWasvmbarmCpHsWF/J05HDfX9VcqEs+7CQXMu2hLASVXGhs4rO4/IRXhHouXMriNFemp9JjVMuF4sKaJ7m6SZDxa4F6LtTLZUG56GuZIAnqw27VbHtchSwoD4eSd5TWCMVw+Yk4+aq5gmE3pj3Z9XRji2nUc8vbjrAMKefKh8ehXP7QoVfH7JnGdL2yhRFTzoWy1KQMg8QrDwPbpY8UM1YsrETqubBVz3tspWPPsxObTRq3/ggrtyKu2KmPfe6rhmMvy3q1InDGTZXDjX7v/3aq/wCYeD/Y00S8IAAAAABJRU5ErkJggg==",
  },
  {
    title: "React",
    imageAddress:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/400px-React-icon.svg.png",
  },
  {
    title: "NextJS",
    imageAddress:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/Nextjs-logo.svg/440px-Nextjs-logo.svg.png",
  },
];

const Profile = ({}) => {
  const SkillList = () => {
    return (
      <StyledSkillSection className="skills">
        <h3>Skills</h3>
        <ul>
          {skills.map((skill) => {
            return (
              <li key={skill.title}>
                <img src={skill.imageAddress} />
                <strong>{skill.title}</strong>
              </li>
            );
          })}
        </ul>
      </StyledSkillSection>
    );
  };

  return (
    <StyledProfile>
      <h2>Profile</h2>
      <section>
        <SkillList />
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
