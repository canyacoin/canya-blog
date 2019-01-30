import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"

export default ({ data }) => {
    <button className={data.classes}>
        {data.btnText}
    </button>
}