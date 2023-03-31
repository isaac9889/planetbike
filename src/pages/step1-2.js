import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"

const StepOneTwo = () => (
  <Layout>
    <div className="Card">
      <div className="Card__Content">
        <div className="Card__ContentTextCtr">
          <h1 className="Card__ContentTitle">
            Step 1 | <span>Identify parts</span>
          </h1>
          <span className="Card__Divider" />
          <p className="Card__ContentText">
          Please asure that you have <strong>all the parts</strong> required for the ensamble:
          </p>
          <div className="Card__Image">
            <StaticImage
              src="../images/p9.jpg"
              loading="eager"
              width={307}
              quality={95}
              formats={["auto", "webp", "avif"]}
              alt=""
              style={{ marginBottom: `var(--space-3)` }}
            />
          </div>
          <p className="Card__ContentText-Light">
            2. Computer case
          </p>
        </div>
      </div>
      <div className="Buttons">
          <Link to="/step1" className="Button__Outlined" >Go back</Link>
          <Link to="/step1-3" className="Button">Continue</Link>
      </div>
      <progress id="progress_form" max="100" value="14" />
    </div>
  </Layout>
)

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = () => <Seo title="Step 1" />

export default StepOneTwo
