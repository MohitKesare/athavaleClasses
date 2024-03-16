import React, { useState } from "react";
import "./coursePage.css";
const courses = [
  {
    id: 1,
    course: "XI-Mathematics Time Table (2024-2025)",
  },
  {
    id: 2,
    course: "XII-Mathematics Time Table (2024-2025)",
  },
  {
    id: 3,
    course: "Time table for Mathematics 12th CET",
  },
  {
    id: 4,
    course: "CET Papers",
  },
];
const CoursePage = () => {
  const [selectedTab, setSelectedTab] = useState(1);

  const handleClick = (id) => {
    setSelectedTab(id);
  };
  return (
    <div className="course-page">
      <div className="course-page-content">
        <div className="course-tabs">
          {courses.map((course) => (
            <div
              className={
                selectedTab === course.id ? "tab-item active" : "tab-item"
              }
              onClick={() => handleClick(course.id)}
            >
              {course.course}
            </div>
          ))}
        </div>
        <div className="tab-content">
          {selectedTab == 1 && (
            <div>
              {" "}
              <div className="course-page-head">
                <h3>XI-Mathematics Time Table (2024-2025)</h3>
              </div>
              <div className="course-cards">
                <div className="course-page-card">
                  <div className="course-card-head">Maharashtra Board</div>
                  <div className="course-card-date">
                    <p>Date : 21th June 2023 to February 2024</p>
                    <p>Days : Mon, Tue, Wed, Fri, Sat, Sun</p>
                  </div>
                  <div className="course-card-table">
                    <div className="table-row special-row">
                      <div className="table-row-key">Batch</div>
                      <div className="table-row-value">Timings</div>
                    </div>
                    <div className="table-row">
                      <div className="table-row-key">B-1</div>
                      <div className="table-row-value">6.00 am to 07.15 am</div>
                    </div>
                    <div className="table-row">
                      <div className="table-row-key">B-2</div>
                      <div className="table-row-value">
                        10.15 am to 11.30 am
                      </div>
                    </div>
                    <div className="table-row">
                      <div className="table-row-key">B-3</div>
                      <div className="table-row-value">5.15 pm to 6.30 pm</div>
                    </div>
                    <div className="table-note sp-border">
                      <img src="./assets/bindu.svg" />
                      <p>
                        Revision / Practice lecture,Exam on completion of the
                        topic
                      </p>
                    </div>
                  </div>
                </div>
                <div className="course-page-card">
                  <div className="course-card-head">Maharashtra Board</div>
                  <div className="course-card-date">
                    <p>Date : 29th July 2021 to 15th January 2022</p>
                    <p>Days : Thu , Sun</p>
                  </div>
                  <div className="course-card-table">
                    <div className="table-row special-row">
                      <div className="table-row-key">Batch</div>
                      <div className="table-row-value">Timings</div>
                    </div>
                    <div className="table-row">
                      <div className="table-row-key">B-1</div>
                      <div className="table-row-value">6.00 am to 07.15 am</div>
                    </div>
                    <div className="table-row">
                      <div className="table-row-key">B-2</div>
                      <div className="table-row-value">5.15 pm to 6.30 pm</div>
                    </div>

                    <div className="table-note"></div>
                  </div>
                </div>
              </div>
              <div className="course-info">
                <div className="course-fees-info">
                  <h3>Fees Breakdown</h3>
                  <ul>
                    <li>
                      11th Board: Rs. 20,000/- + 18% GST (Rs. 3,600/-) = Rs.
                      23,600/-
                    </li>
                    <li>11th CET: Rs. 5,000/-</li>
                  </ul>
                </div>
                <div className="course-req">
                  <h3>Admission Requirements:</h3>
                  <ul>
                    <li>2 photographs</li>
                    <li>
                      Cheque of Rs. 10,000/- + 18% GST (Rs. 11,800/-) (current
                      dated) payable to 'Athavale Classes'
                    </li>
                    <li>
                      Another post-dated cheque of Rs. 10,000/- + 18% GST (Rs.
                      11,800/-) dated September 1, 2021, payable to 'Athavale
                      Classes'
                    </li>
                    <li>
                      Maharashtra 11th CET cheque of Rs. 5,000/- payable to
                      'Dnyanada Athavale'
                    </li>
                    <li>
                      Note: There will be no refund of fees under any
                      circumstances.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          )}
          {selectedTab == 2 && (
            <div>
              {" "}
              <div className="course-page-head">
                <h3>XII-Mathematics Time Table (2024-2025)</h3>
              </div>
              <div className="course-cards">
                <div className="course-page-card">
                  <div className="course-card-head">Maharashtra Board</div>
                  <div className="course-card-date">
                    <p>Date : 19th Nov. 2023 to 11th Feb. 2024</p>
                    <p>Days : Sun</p>
                  </div>
                  <div className="course-card-table">
                    <div className="table-row special-row">
                      <div className="table-row-key">Batch</div>
                      <div className="table-row-value">Timings</div>
                    </div>
                    <div className="table-row">
                      <div className="table-row-key">B-2</div>
                      <div className="table-row-value">
                        6.00 am to 07.15 am(sunday)
                      </div>
                    </div>
                    {/* <div className="table-row">
                      <div className="table-row-key">B-2</div>
                      <div className="table-row-value">6.00 am to 07.15 am</div>
                    </div>
                    <div className="table-row">
                      <div className="table-row-key">B-3</div>
                      <div className="table-row-value">6.00 am to 07.15 am</div>
                    </div> */}
                    <div className="table-note sp-border">
                      <img src="./assets/bindu.svg" />
                      <p>
                        Revision / Practice lecture,Exam on completion of the
                        topic
                      </p>
                    </div>
                  </div>
                </div>
                <div className="course-page-card">
                  {" "}
                  <div className="course-card-head">Maharashtra Board</div>
                  <div className="course-card-date">
                    <p>Date : 22 april 2024 to 14th June 2024</p>
                    <p>Days : Mon, Tue, Wed, Fri, Sat, Sun</p>
                  </div>
                  <div className="course-card-table">
                    <div className="table-row special-row">
                      <div className="table-row-key">Batch</div>
                      <div className="table-row-value">Timings</div>
                    </div>
                    <div className="table-row">
                      <div className="table-row-key">B-1</div>
                      <div className="table-row-value">6.30 am to 08.45 am</div>
                    </div>
                    <div className="table-row">
                      <div className="table-row-key">B-2</div>
                      <div className="table-row-value">5.15 pm to 07.30 pm</div>
                    </div>

                    <div className="table-note"></div>
                  </div>
                </div>
              </div>
              <div className="sp-table">
                <div className="course-page-card">
                  <div className="course-card-head">Maharashtra Board</div>
                  <div className="course-card-date">
                    <p>Date : 24th June 2024 to 30th october 2024</p>
                    <p>Days : Mon, Tue, Wed, Fri, Sat</p>
                  </div>
                  <div className="course-card-table">
                    <div className="table-row special-row">
                      <div className="table-row-key">Batch</div>
                      <div className="table-row-value">Timings</div>
                    </div>
                    <div className="table-row">
                      <div className="table-row-key">B-1</div>
                      <div className="table-row-value">8.00 am to 9.15am</div>
                    </div>
                    <div className="table-row">
                      <div className="table-row-key">B-2</div>
                      <div className="table-row-value">6.45 pm to 8.00 pm</div>
                    </div>

                    <div className="table-note sp-border">
                      <img src="./assets/bindu.svg" />
                      <p>
                        Revision / Practice lecture,Exam on completion of the
                        topic
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="course-info">
                <div className="course-fees-info">
                  <h3>Fees Breakdown</h3>
                  <ul>
                    <li>
                      11th Board: Rs. 20,000/- + 18% GST (Rs. 3,600/-) = Rs.
                      23,600/-
                    </li>
                    <li>11th CET: Rs. 5,000/-</li>
                  </ul>
                </div>
                <div className="course-req">
                  <h3>Admission Requirements:</h3>
                  <ul>
                    <li>2 photographs</li>
                    <li>
                      Cheque of Rs. 10,000/- + 18% GST (Rs. 11,800/-) (current
                      dated) payable to 'Athavale Classes'
                    </li>
                    <li>
                      Another post-dated cheque of Rs. 10,000/- + 18% GST (Rs.
                      11,800/-) dated September 1, 2021, payable to 'Athavale
                      Classes'
                    </li>
                    <li>
                      Maharashtra 11th CET cheque of Rs. 5,000/- payable to
                      'Dnyanada Athavale'
                    </li>
                    <li>
                      Note: There will be no refund of fees under any
                      circumstances.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          )}
          {selectedTab == 3 && (
            <div>
              {" "}
              <div className="course-page-head">
                <h3>Time table for Mathematics 12th CET</h3>
              </div>
              <div className="course-cards">
                <div className="course-page-card">
                  <div className="course-card-head">Maharashtra Board</div>
                  <div className="course-card-date">
                    <p>Date : March 2024 till date of Examination</p>
                    <p>Days : Mon, Tue, Wed, Thu , Fri, Sat, Sun</p>
                  </div>
                  <div className="course-card-table">
                    <div className="table-row special-row">
                      <div className="table-row-key">Batch</div>
                      <div className="table-row-value">Timings</div>
                    </div>
                    <div className="table-row">
                      <div className="table-row-key">B-1</div>
                      <div className="table-row-value">
                        10.00 am to 12.00 pm
                      </div>
                    </div>

                    <div className="table-note sp-border">
                      <img src="./assets/bindu.svg" />
                      <p>
                        Revision / Practice lecture,Exam on completion of the
                        topic
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="course-info">
                <div className="course-fees-info">
                  <h3>Fees Breakdown</h3>
                  <ul>
                    <li>
                      11th Board: Rs. 20,000/- + 18% GST (Rs. 3,600/-) = Rs.
                      23,600/-
                    </li>
                    <li>11th CET: Rs. 5,000/-</li>
                  </ul>
                </div>
                <div className="course-req">
                  <h3>Admission Requirements:</h3>
                  <ul>
                    <li>2 photographs</li>
                    <li>
                      Cheque of Rs. 10,000/- + 18% GST (Rs. 11,800/-) (current
                      dated) payable to 'Athavale Classes'
                    </li>
                    <li>
                      Another post-dated cheque of Rs. 10,000/- + 18% GST (Rs.
                      11,800/-) dated September 1, 2021, payable to 'Athavale
                      Classes'
                    </li>
                    <li>
                      Maharashtra 11th CET cheque of Rs. 5,000/- payable to
                      'Dnyanada Athavale'
                    </li>
                    <li>
                      Note: There will be no refund of fees under any
                      circumstances.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          )}
          {selectedTab == 4 && (
            <div>
              {" "}
              <div className="course-page-head">
                <h3>CET Papers</h3>
              </div>
              <div className="course-cards">
                <div className="course-page-card">
                  <div className="course-card-head">Maharashtra Board</div>
                  <div className="course-card-date">
                    <p>Date : 21th June 2023 to February 2024</p>
                    <p>Days : Mon, Tue, Wed, Fri, Sat, Sun</p>
                  </div>
                  <div className="course-card-table">
                    <div className="table-row special-row">
                      <div className="table-row-key">Batch</div>
                      <div className="table-row-value">Timings</div>
                    </div>
                    <div className="table-row">
                      <div className="table-row-key">B-1</div>
                      <div className="table-row-value">6.00 am to 07.15 am</div>
                    </div>
                    <div className="table-row">
                      <div className="table-row-key">B-2</div>
                      <div className="table-row-value">6.00 am to 07.15 am</div>
                    </div>
                    <div className="table-row">
                      <div className="table-row-key">B-3</div>
                      <div className="table-row-value">6.00 am to 07.15 am</div>
                    </div>
                    <div className="table-note sp-border">
                      <img src="./assets/bindu.svg" />
                      <p>
                        Revision / Practice lecture,Exam on completion of the
                        topic
                      </p>
                    </div>
                  </div>
                </div>
                <div className="course-page-card">
                  <div className="course-card-head">Maharashtra Board</div>
                  <div className="course-card-date">
                    <p>Date : 21th June 2023 to February 2024</p>
                    <p>Days : Mon, Tue, Wed, Fri, Sat, Sun</p>
                  </div>
                  <div className="course-card-table">
                    <div className="table-row special-row">
                      <div className="table-row-key">Batch</div>
                      <div className="table-row-value">Timings</div>
                    </div>
                    <div className="table-row">
                      <div className="table-row-key">B-1</div>
                      <div className="table-row-value">6.00 am to 07.15 am</div>
                    </div>
                    <div className="table-row">
                      <div className="table-row-key">B-2</div>
                      <div className="table-row-value">6.00 am to 07.15 am</div>
                    </div>
                    <div className="table-row">
                      <div className="table-row-key">B-3</div>
                      <div className="table-row-value">6.00 am to 07.15 am</div>
                    </div>
                    <div className="table-note"></div>
                  </div>
                </div>
              </div>
              <div className="course-info">
                <div className="course-fees-info">
                  <h3>Fees Breakdown</h3>
                  <ul>
                    <li>
                      11th Board: Rs. 20,000/- + 18% GST (Rs. 3,600/-) = Rs.
                      23,600/-
                    </li>
                    <li>11th CET: Rs. 5,000/-</li>
                  </ul>
                </div>
                <div className="course-req">
                  <h3>Admission Requirements:</h3>
                  <ul>
                    <li>2 photographs</li>
                    <li>
                      Cheque of Rs. 10,000/- + 18% GST (Rs. 11,800/-) (current
                      dated) payable to 'Athavale Classes'
                    </li>
                    <li>
                      Another post-dated cheque of Rs. 10,000/- + 18% GST (Rs.
                      11,800/-) dated September 1, 2021, payable to 'Athavale
                      Classes'
                    </li>
                    <li>
                      Maharashtra 11th CET cheque of Rs. 5,000/- payable to
                      'Dnyanada Athavale'
                    </li>
                    <li>
                      Note: There will be no refund of fees under any
                      circumstances.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CoursePage;
