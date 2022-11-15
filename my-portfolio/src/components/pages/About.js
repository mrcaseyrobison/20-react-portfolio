import React from 'react';
import { Grid } from '@mui/material';
import headShot from '../../assets/images/headshot.jpeg';

// Some in-line styling for objects
const styles = {
  section: {
    marginTop: 20,
    textAlign: "center"
  },
  image: {
    borderRadius: 200,
    border: "5px solid #000000",
  },
  divider: {
    borderTop: "1px solid #000000",
    marginTop: 20,
    marginBottom: 20,
    width: "100%"
  }
};

export default function About() {
  return (
    <div style={styles.section} className="about">
      <Grid container direction="column" alignItems="center">
      <img src={headShot} alt="headshot" height="300px" style={styles.image} />
    <div>
    <section id="about-me">
      <h2>About Me:</h2>
      <p>
        Born and raised in Seattle WA, I have spent the majority of my career in
        the liquor and hospitality business. From 2008 - 2018 I was the beverage
        director for Heavy Restaraunt Group where I designed, coordinated, and
        opened numerous bar programs for new concepts around Seattle and on the
        Eastside. Mentoring younger bartenders has always been a passion of mine
        and my experience with Heavy allowed me to pursue that passion.
      </p>
      <p>
        In 2018 I left Heavy to pursue a role in spirits marketing with Pernod
        Ricard, where I was a Key Account Manager for their New Brand Ventures
        portfolio in the Seattle area. It was a great experience that was
        unfortunately cut short by a global pandemic.
      </p>
      <p>
        While working at Pernod Ricard I also went back to school. I got my
        Associate of Arts degree from Seattle Central and in 2020 matriculated
        to the University of Washington where I pursued a degree in History. I
        completed my degree in 2022. I am forever grateful for my experience at
        the UW.
      </p>
      <p>
        As an avid traveler and amatuer photographer, I am using this space to
        showcase just a handful of photos from my travels. These photos are
        placeholders for forthcoming web projects.
      </p>
      </section>
        </div>
      </Grid>
    </div>
  );
}