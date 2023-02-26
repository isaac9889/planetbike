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
            Step 3 | <span>Functions & Specs</span>
          </h1>
          <p className="Card__ContentText">
            <strong>Know your product</strong>
          </p>
          <div className="Card__Image">
            <StaticImage
              src="../images/Product8.png"
              loading="eager"
              width={566}
              quality={95}
              formats={["auto", "webp", "avif"]}
              alt=""
              style={{ marginBottom: `var(--space-3)` }}
            />
          </div>
        </div>
      </div>
      <div className="Buttons">
          <Link to="/step2-4" className="Button__Outlined" >Go back</Link>
          <Link to="/" className="Button">Finish</Link>
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

export default StepTwoFour
