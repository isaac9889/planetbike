import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"

const StepTwo = () => (
  <Layout>
    <div className="Card">
      <div className="Card__Content">
        <div className="Card__ContentTextCtr">
          <h1 className="Card__ContentTitle">
            Step 2 | <span>Mounting instructions</span>
          </h1>
          <span className="Card__Divider" />
          <p className="Card__ContentText">
            <strong>Step 1 |</strong> Attach the wheel sensor to the <strong>right</strong> or <strong>left</strong> fork using <strong>two</strong> quick ties
          </p>
          <div className="Card__Image">
            <StaticImage
              src="../images/Product1.png"
              loading="eager"
              width={307}
              quality={95}
              formats={["auto", "webp", "avif"]}
              alt=""
              style={{ marginBottom: `var(--space-3)` }}
            />
          </div>
          <p className="Card__ContentText">
            <strong>Note: Do not fully tighten</strong> quick ties <strong>until final placement is determined.</strong> We recommend a sensor placement of <strong>1-2 Inches</strong> up from hub axie. Position sensor and wire on <strong>backside (toward rider)</strong> of <strong>fork blade</strong> to offer <strong>protection from debris</strong> while riding.
          </p>
        </div>
      </div>
      <div className="Buttons">
          <Link to="/step1-3" className="Button__Outlined" >Go back</Link>
          <Link to="/step2-1" className="Button">Continue</Link>
      </div>
      <progress id="progress_form" max="100" value="42" />
    </div>
  </Layout>
)

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = () => <Seo title="Step 1" />

export default StepTwo
