import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"

const StepTwoThree = () => (
  <Layout>
    <div className="Card">
      <div className="Card__Content">
        <div className="Card__ContentTextCtr">
          <h1 className="Card__ContentTitle">
            Step 2 | <span>Mounting instructions</span>
          </h1>
          <span className="Card__Divider" />
          <p className="Card__ContentText">
            <strong>Step 4 |</strong> Attach the <strong>computer bracket</strong> to the <strong>handlebars</strong> near the stern. Use any combination of <strong>rubber shims</strong> to fit different diameter handlebars.
          </p>
          <div className="Card__Image">
            <StaticImage
              src="../images/Product5.png"
              loading="eager"
              width={307}
              quality={95}
              formats={["auto", "webp", "avif"]}
              alt=""
              style={{ marginBottom: `var(--space-3)` }}
            />
          </div>
          <p className="Card__ContentText">
            Tighten the screw so <strong>the bracket will not rotate</strong>  on the handlebars. Slide the computer head into the bracket <strong>until it "snaps"</strong>  into place.
          </p>
        </div>
      </div>
      <div className="Buttons">
          <Link to="/step2-2" className="Button__Outlined" >Go back</Link>
          <Link to="/step2-4" className="Button">Continue</Link>
      </div>
      <progress id="progress_form" max="100" value="84" />
    </div>
  </Layout>
)

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = () => <Seo title="Step 1" />

export default StepTwoThree
