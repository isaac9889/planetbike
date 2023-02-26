import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"

const StepOneThree = () => (
  <Layout>
    <div className="Card">
      <div className="Card__Content">
        <div className="Card__ContentTextCtr">
          <h1 className="Card__ContentTitle">
            Step 1 | <span>Identify parts</span>
          </h1>
          <p className="Card__ContentText">
            Please asure that you have <strong>all the parts</strong> required for the ensamble:
          </p>
          <p className="Card__ContentText">
            3.  <strong>5</strong> Quick ties,  <strong>3</strong> rubber shims and  <strong>1</strong> wheel magnet
          </p>
          <div className="Card__Image">
            <StaticImage
              src="../images/cables.png"
              loading="eager"
              width={307}
              quality={95}
              formats={["auto", "webp", "avif"]}
              alt=""
              style={{ marginBottom: `var(--space-3)` }}
            />
          </div>
        </div>
      </div>
      <div className="Buttons">
          <Link to="/step1-2" className="Button__Outlined" >Go back</Link>
          <Link to="/step2" className="Button">Continue</Link>
      </div>
    </div>
  </Layout>
)

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = () => <Seo title="Step 1" />

export default StepOneThree
