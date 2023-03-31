import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"

const StepTwoOne = () => (
  <Layout>
    <div className="Card">
      <div className="Card__Content">
        <div className="Card__ContentTextCtr">
          <h1 className="Card__ContentTitle">
            Step 2 | <span>Mounting instructions</span>
          </h1>
          <span className="Card__Divider" />
          <p className="Card__ContentText">
            <strong>Step 2 |</strong>Attach magnet to spoke using screwdriver so magnet <strong>lines up</strong> directly across from <strong>one of the flat round dots</strong> at the <strong>lower</strong> or <strong>upper</strong> portion of wheel sensor with a distance of <strong>12 mm</strong> between sensor and magnet 
          </p>
          <div className="Card__Image">
            <StaticImage
              src="../images/Product2.png"
              loading="eager"
              width={307}
              quality={95}
              formats={["auto", "webp", "avif"]}
              alt=""
              style={{ marginBottom: `var(--space-3)` }}
            />
          </div>
          <p className="Card__ContentText">
            <strong>Caution:</strong> Do not <strong>over-tighten</strong> magnet screw.
          </p>
        </div>
      </div>
      <div className="Buttons">
          <Link to="/step2" className="Button__Outlined" >Go back</Link>
          <Link to="/step2-2" className="Button">Continue</Link>
      </div>
      <progress id="progress_form" max="100" value="56" />
    </div>
  </Layout>
)

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = () => <Seo title="Step 1" />

export default StepTwoOne
