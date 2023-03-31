import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"

const StepTwoTwo = () => (
  <Layout>
    <div className="Card">
      <div className="Card__Content">
        <div className="Card__ContentTextCtr">
          <h1 className="Card__ContentTitle">
            Step 2 | <span>Mounting instructions</span>
          </h1>
          <span className="Card__Divider" />
          <p className="Card__ContentText">
            <strong>Step 3 |</strong> Attach the wire harness to the <strong>fork using quick ties.</strong> Excess wire can be wrapped around <strong>brake cable</strong> before securing bracket to handlebar. 
          </p>
          <div className="Card__Image">
            <StaticImage
              src="../images/Product3.png"
              loading="eager"
              width={307}
              quality={95}
              formats={["auto", "webp", "avif"]}
              alt=""
              style={{ marginBottom: `var(--space-3)` }}
            />
          </div>
          <p className="Card__ContentText">
            <strong>Note:</strong> Allow slight wire slack between <strong>fork and brake cable</strong> or turning handlebars.
          </p>
        </div>
      </div>
      <div className="Buttons">
          <Link to="/step2-1" className="Button__Outlined" >Go back</Link>
          <Link to="/step2-3" className="Button">Continue</Link>
      </div>
      <progress id="progress_form" max="100" value="70" />
    </div>
  </Layout>
)

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = () => <Seo title="Step 1" />

export default StepTwoTwo
