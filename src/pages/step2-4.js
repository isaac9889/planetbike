import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"

const StepTwoFour = () => (
  <Layout>
    <div className="Card">
      <div className="Card__Content">
        <div className="Card__ContentTextCtr">
          <h1 className="Card__ContentTitle">
            Step 2 | <span>Mounting instructions</span>
          </h1>
          <span className="Card__Divider" />
          <p className="Card__ContentText">
            <strong>Step 5 |</strong> Install computer head into bracket and rotate <strong>front wheel</strong> to test for proper function of <strong>magnet/wheel</strong> sensor alignment.
          </p>
          <p className="Card__ContentText-Left">
            
          </p>
          <div className="Card__Image">
            <StaticImage
              src="../images/Product7.png"
              loading="eager"
              width={307}
              quality={95}
              formats={["auto", "webp", "avif"]}
              alt=""
              style={{ marginBottom: `var(--space-3)` }}
            />
          </div>
          <p className="Card__ContentText">
            The mph/kph indicator <strong>will flash</strong> if the sensor and magnet are <strong>properly aligned.</strong> Tighten quick ties on sensor when correct alignment is acheived.
          </p>
        </div>
      </div>
      <div className="Buttons">
          <Link to="/step2-3" className="Button__Outlined" >Go back</Link>
          <Link to="/step3" className="Button">Finish</Link>
      </div>
      <progress id="progress_form" max="100" value="100" />
    </div>
  </Layout>
)

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = () => <Seo title="Step 1" />

export default StepTwoFour
