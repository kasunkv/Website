import React from "react";

import Layout from "../../../components/Layout";


export default class BlogIndexPage extends React.Component {
  render() {
    return (
      <Layout>
        <div
          className="full-width-image-container margin-top-0"
          style={{
            backgroundImage: `url('/img/associateexam.jpg')`
          }}
        >
          <h1
            className="has-text-weight-bold is-size-1"
            style={{
              color: "black",
              padding: "1rem"
            }}
          >
            Associate Exam
          </h1>
        </div>

        <section className="section">
          <div className="container">
            <div className="content">
              <section className="section section--gradient">
                <div className="container">
                  <div className="columns">
                    <div className="column is-10 is-offset-1">
                      <div className="section">
                        <h2 className="title is-size-3 has-text-weight-bold is-bold-light">
                          What is Associate Exam?
                        </h2>
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the
                        industry's standard dummy text ever since the 1500s,
                        when an unknown printer took a galley of type and
                        scrambled it to make a type specimen book. It has
                        survived not only five centuries, but also the leap into
                        electronic typesetting, remaining essentially unchanged.
                        It was popularised in the 1960s with the release of
                        Letraset sheets containing Lorem Ipsum passages, and
                        more recently with desktop publishing software like
                        Aldus PageMaker including versions of Lorem Ipsum
                        <br />
                        <br />
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the
                        industry's standard dummy text ever since the 1500s,
                        when an unknown printer took a galley of type and
                        scrambled it to make a type specimen book. It has
                        survived not only five centuries, but also the leap into
                        electronic typesetting, remaining essentially unchanged.
                        It was popularised in the 1960s with the release of
                        Letraset sheets containing Lorem Ipsum passages, and
                        more recently with desktop publishing software like
                        Aldus PageMaker including versions of Lorem Ipsum
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </section>
      </Layout>
    );
  }
}
