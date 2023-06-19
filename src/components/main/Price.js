import { useState } from "react";

const Price = ({ price }) => {
  const [monthly, setMonthly] = useState(true);
  const [annual, setAnnual] = useState(false);
  const [selected, setSelected] = useState(3);

  return (
    <div className="mt-sm-n20">
      <div className="landing-curve landing-dark-color">
        <svg
          viewBox="15 -1 1470 48"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M1 48C4.93573 47.6644 8.85984 47.3311 12.7725 47H1489.16C1493.1 47.3311 1497.04 47.6644 1501 48V47H1489.16C914.668 -1.34764 587.282 -1.61174 12.7725 47H1V48Z"
            fill="currentColor"
          />
        </svg>
      </div>
      <div className="py-20 landing-dark-bg">
        <div className="container">
          <div className="d-flex flex-column container pt-lg-20">
            <div className="mb-13 text-center">
              <h1
                className="fs-2hx fw-bolder text-white mb-5"
                id="pricing"
                data-kt-scroll-offset="{default: 100, lg: 150}"
              >
                Clear Pricing Makes it Easy
              </h1>
              <div className="text-gray-600 fw-bold fs-5">
                Save thousands to millions of bucks by using single tool for
                different
                <br />
                amazing and outstanding cool and great useful admin
              </div>
            </div>
            <div className="text-center" id="kt_pricing">
              <div
                className="nav-group landing-dark-bg d-inline-flex mb-15"
                data-kt-buttons="true"
                // style={{ border: "1px dashed #2B4666" }}
              >
                <a
                  onClick={() => {
                    setMonthly(true);
                    setAnnual(false);
                  }}
                  className={`btn btn-color-gray-600 btn-active btn-active-success px-6 py-3 me-2 ${[
                    monthly ? "active" : "",
                  ]} `}
                  data-kt-plan="month"
                >
                  Monthly
                </a>
                <a
                  onClick={() => {
                    setMonthly(false);
                    setAnnual(true);
                  }}
                  className={`btn btn-color-gray-600 btn-active btn-active-success px-6 py-3 me-2 ${[
                    annual ? "active" : "",
                  ]} `}
                  data-kt-plan="annual"
                >
                  Annual
                </a>
              </div>
              <div className="row g-10">
                <div className="col-xl-4">
                  <div className="d-flex h-100 align-items-center">
                    <div
                      className={`w-100 d-flex flex-column flex-center rounded-3 ${
                        selected === 1 ? "bg-primary" : "bg-body"
                      } py-15 px-10`}
                    >
                      <div className="mb-7 text-center">
                        <h1
                          className={`${
                            selected === 1
                              ? "text-white mb-5 fw-boldest"
                              : "text-dark mb-5 fw-boldest"
                          }`}
                        >
                          Startup
                        </h1>
                        <div
                          className={`${
                            selected === 1
                              ? "text-white opacity-75 fw-bold mb-5"
                              : "text-gray-400 fw-bold mb-5"
                          }`}
                        >
                          Best Settings for Startups
                        </div>
                        <div className="text-center">
                          <span
                            className={`${
                              selected === 1
                                ? "mb-2 text-white"
                                : "mb-2 text-primary"
                            }`}
                          >
                            $
                          </span>
                          <span
                            className={`${
                              selected === 1
                                ? "fs-3x fw-bolder text-white"
                                : "fs-3x fw-bolder text-primary"
                            }`}
                            data-kt-plan-price-month={99}
                            data-kt-plan-price-annual={999}
                          >
                            {monthly
                              ? `${price.monthlyPrice.startup}`
                              : `${price.annualPrice.startup}`}
                          </span>
                          <span
                            className={`${
                              selected === 1
                                ? "fs-7 fw-bold text-white opacity-75"
                                : "fs-7 fw-bold opacity-50"
                            }`}
                            data-kt-plan-price-month="Mon"
                            data-kt-plan-price-annual="Ann"
                          >
                            / {monthly ? "Mon" : "Year"}
                          </span>
                        </div>
                      </div>
                      <div className="w-100 mb-10">
                        <div className="d-flex flex-stack mb-5">
                          <span
                            className={`${
                              selected === 1
                                ? "fw-bold fs-6 text-white opacity-75"
                                : "fw-bold fs-6 text-gray-800 text-start pe-3"
                            }`}
                          >
                            Up to 10 Active Users
                          </span>
                          <span
                            className={`${
                              selected === 1
                                ? "svg-icon svg-icon-1 svg-icon-white"
                                : "svg-icon svg-icon-1 svg-icon-success"
                            }`}
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width={24}
                              height={24}
                              viewBox="0 0 24 24"
                              fill="none"
                            >
                              <rect
                                opacity="0.3"
                                x={2}
                                y={2}
                                width={20}
                                height={20}
                                rx={10}
                                fill="black"
                              />
                              <path
                                d="M10.4343 12.4343L8.75 10.75C8.33579 10.3358 7.66421 10.3358 7.25 10.75C6.83579 11.1642 6.83579 11.8358 7.25 12.25L10.2929 15.2929C10.6834 15.6834 11.3166 15.6834 11.7071 15.2929L17.25 9.75C17.6642 9.33579 17.6642 8.66421 17.25 8.25C16.8358 7.83579 16.1642 7.83579 15.75 8.25L11.5657 12.4343C11.2533 12.7467 10.7467 12.7467 10.4343 12.4343Z"
                                fill="black"
                              />
                            </svg>
                          </span>
                        </div>
                        <div className="d-flex flex-stack mb-5">
                          <span
                            className={`${
                              selected === 1
                                ? "fw-bold fs-6 text-white opacity-75"
                                : "fw-bold fs-6 text-gray-800 text-start pe-3"
                            }`}
                          >
                            Up to 30 Project Integrations
                          </span>
                          <span
                            className={`${
                              selected === 1
                                ? "svg-icon svg-icon-1 svg-icon-white"
                                : "svg-icon svg-icon-1 svg-icon-success"
                            }`}
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width={24}
                              height={24}
                              viewBox="0 0 24 24"
                              fill="none"
                            >
                              <rect
                                opacity="0.3"
                                x={2}
                                y={2}
                                width={20}
                                height={20}
                                rx={10}
                                fill="black"
                              />
                              <path
                                d="M10.4343 12.4343L8.75 10.75C8.33579 10.3358 7.66421 10.3358 7.25 10.75C6.83579 11.1642 6.83579 11.8358 7.25 12.25L10.2929 15.2929C10.6834 15.6834 11.3166 15.6834 11.7071 15.2929L17.25 9.75C17.6642 9.33579 17.6642 8.66421 17.25 8.25C16.8358 7.83579 16.1642 7.83579 15.75 8.25L11.5657 12.4343C11.2533 12.7467 10.7467 12.7467 10.4343 12.4343Z"
                                fill="black"
                              />
                            </svg>
                          </span>
                        </div>
                        <div className="d-flex flex-stack mb-5">
                          <span
                            className={`${
                              selected === 1
                                ? "fw-bold fs-6 text-white opacity-75"
                                : "fw-bold fs-6 text-gray-800 text-start pe-3"
                            }`}
                          >
                            Keen Analytics Platform
                          </span>
                          <span
                            className={`${
                              selected === 1
                                ? "svg-icon svg-icon-1 svg-icon-white"
                                : "svg-icon svg-icon-1 svg-icon-success"
                            }`}
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width={24}
                              height={24}
                              viewBox="0 0 24 24"
                              fill="none"
                            >
                              <rect
                                opacity="0.3"
                                x={2}
                                y={2}
                                width={20}
                                height={20}
                                rx={10}
                                fill="black"
                              />
                              <rect
                                x={7}
                                y="15.3137"
                                width={12}
                                height={2}
                                rx={1}
                                transform="rotate(-45 7 15.3137)"
                                fill="black"
                              />
                              <rect
                                x="8.41422"
                                y={7}
                                width={12}
                                height={2}
                                rx={1}
                                transform="rotate(45 8.41422 7)"
                                fill="black"
                              />
                            </svg>
                          </span>
                        </div>
                        <div className="d-flex flex-stack mb-5">
                          <span
                            className={`${
                              selected === 1
                                ? "fw-bold fs-6 text-white opacity-75"
                                : "fw-bold fs-6 text-gray-800 text-start pe-3"
                            }`}
                          >
                            Targets Timelines &amp; Files
                          </span>
                          <span
                            className={`${
                              selected === 1
                                ? "svg-icon svg-icon-1 svg-icon-white"
                                : "svg-icon svg-icon-1 svg-icon-success"
                            }`}
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width={24}
                              height={24}
                              viewBox="0 0 24 24"
                              fill="none"
                            >
                              <rect
                                opacity="0.3"
                                x={2}
                                y={2}
                                width={20}
                                height={20}
                                rx={10}
                                fill="black"
                              />
                              <rect
                                x={7}
                                y="15.3137"
                                width={12}
                                height={2}
                                rx={1}
                                transform="rotate(-45 7 15.3137)"
                                fill="black"
                              />
                              <rect
                                x="8.41422"
                                y={7}
                                width={12}
                                height={2}
                                rx={1}
                                transform="rotate(45 8.41422 7)"
                                fill="black"
                              />
                            </svg>
                          </span>
                        </div>
                        <div className="d-flex flex-stack">
                          <span
                            className={`${
                              selected === 1
                                ? "fw-bold fs-6 text-white opacity-75"
                                : "fw-bold fs-6 text-gray-800 text-start pe-3"
                            }`}
                          >
                            Unlimited Projects
                          </span>
                          <span
                            className={`${
                              selected === 1
                                ? "svg-icon svg-icon-1 svg-icon-white"
                                : "svg-icon svg-icon-1 svg-icon-success"
                            }`}
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width={24}
                              height={24}
                              viewBox="0 0 24 24"
                              fill="none"
                            >
                              <rect
                                opacity="0.3"
                                x={2}
                                y={2}
                                width={20}
                                height={20}
                                rx={10}
                                fill="black"
                              />
                              <rect
                                x={7}
                                y="15.3137"
                                width={12}
                                height={2}
                                rx={1}
                                transform="rotate(-45 7 15.3137)"
                                fill="black"
                              />
                              <rect
                                x="8.41422"
                                y={7}
                                width={12}
                                height={2}
                                rx={1}
                                transform="rotate(45 8.41422 7)"
                                fill="black"
                              />
                            </svg>
                          </span>
                        </div>
                      </div>
                      <a
                        onClick={() => {
                          setSelected(1);
                        }}
                        className={`${
                          selected === 1
                            ? "btn btn-color-primary btn-active-light-primary btn-light"
                            : "btn btn-primary"
                        }`}
                      >
                        Select
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-xl-4">
                  <div className="d-flex h-100 align-items-center">
                    <div
                      className={`w-100 d-flex flex-column flex-center rounded-3 ${
                        selected === 2 ? "bg-primary" : "bg-body"
                      } py-15 px-10`}
                    >
                      <div className="mb-7 text-center">
                        <h1
                          className={`${
                            selected === 2
                              ? "text-white mb-5 fw-boldest"
                              : "text-dark mb-5 fw-boldest"
                          }`}
                        >
                          Business
                        </h1>
                        <div
                          className={`${
                            selected === 2
                              ? "text-white opacity-75 fw-bold mb-5"
                              : "text-gray-400 fw-bold mb-5"
                          }`}
                        >
                          Best Settings for Business
                        </div>
                        <div className="text-center">
                          <span
                            className={`${
                              selected === 2
                                ? "mb-2 text-white"
                                : "mb-2 text-primary"
                            }`}
                          >
                            $
                          </span>
                          <span
                            className={`${
                              selected === 2
                                ? "fs-3x fw-bolder text-white"
                                : "fs-3x fw-bolder text-primary"
                            }`}
                            data-kt-plan-price-month={199}
                            data-kt-plan-price-annual={1999}
                          >
                            {monthly
                              ? `${price.monthlyPrice.business}`
                              : `${price.annualPrice.business}`}
                          </span>
                          <span
                            className={`${
                              selected === 2
                                ? "fs-7 fw-bold text-white opacity-75"
                                : "fs-7 fw-bold opacity-50"
                            }`}
                            data-kt-plan-price-month="Mon"
                            data-kt-plan-price-annual="Ann"
                          >
                            / {monthly ? "Mon" : "Year"}
                          </span>
                        </div>
                      </div>
                      <div className="w-100 mb-10">
                        <div className="d-flex flex-stack mb-5">
                          <span
                            className={`${
                              selected === 2
                                ? "fw-bold fs-6 text-white opacity-75"
                                : "fw-bold fs-6 text-gray-800 text-start pe-3"
                            }`}
                          >
                            Up to 10 Active Users
                          </span>
                          <span
                            className={`${
                              selected === 2
                                ? "svg-icon svg-icon-1 svg-icon-white"
                                : "svg-icon svg-icon-1 svg-icon-success"
                            }`}
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width={24}
                              height={24}
                              viewBox="0 0 24 24"
                              fill="none"
                            >
                              <rect
                                opacity="0.3"
                                x={2}
                                y={2}
                                width={20}
                                height={20}
                                rx={10}
                                fill="black"
                              />
                              <path
                                d="M10.4343 12.4343L8.75 10.75C8.33579 10.3358 7.66421 10.3358 7.25 10.75C6.83579 11.1642 6.83579 11.8358 7.25 12.25L10.2929 15.2929C10.6834 15.6834 11.3166 15.6834 11.7071 15.2929L17.25 9.75C17.6642 9.33579 17.6642 8.66421 17.25 8.25C16.8358 7.83579 16.1642 7.83579 15.75 8.25L11.5657 12.4343C11.2533 12.7467 10.7467 12.7467 10.4343 12.4343Z"
                                fill="black"
                              />
                            </svg>
                          </span>
                        </div>
                        <div className="d-flex flex-stack mb-5">
                          <span
                            className={`${
                              selected === 2
                                ? "fw-bold fs-6 text-white opacity-75"
                                : "fw-bold fs-6 text-gray-800 text-start pe-3"
                            }`}
                          >
                            Up to 30 Project Integrations
                          </span>
                          <span
                            className={`${
                              selected === 2
                                ? "svg-icon svg-icon-1 svg-icon-white"
                                : "svg-icon svg-icon-1 svg-icon-success"
                            }`}
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width={24}
                              height={24}
                              viewBox="0 0 24 24"
                              fill="none"
                            >
                              <rect
                                opacity="0.3"
                                x={2}
                                y={2}
                                width={20}
                                height={20}
                                rx={10}
                                fill="black"
                              />
                              <path
                                d="M10.4343 12.4343L8.75 10.75C8.33579 10.3358 7.66421 10.3358 7.25 10.75C6.83579 11.1642 6.83579 11.8358 7.25 12.25L10.2929 15.2929C10.6834 15.6834 11.3166 15.6834 11.7071 15.2929L17.25 9.75C17.6642 9.33579 17.6642 8.66421 17.25 8.25C16.8358 7.83579 16.1642 7.83579 15.75 8.25L11.5657 12.4343C11.2533 12.7467 10.7467 12.7467 10.4343 12.4343Z"
                                fill="black"
                              />
                            </svg>
                          </span>
                        </div>
                        <div className="d-flex flex-stack mb-5">
                          <span
                            className={`${
                              selected === 2
                                ? "fw-bold fs-6 text-white opacity-75"
                                : "fw-bold fs-6 text-gray-800 text-start pe-3"
                            }`}
                          >
                            Keen Analytics Platform
                          </span>
                          <span
                            className={`${
                              selected === 2
                                ? "svg-icon svg-icon-1 svg-icon-white"
                                : "svg-icon svg-icon-1 svg-icon-success"
                            }`}
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width={24}
                              height={24}
                              viewBox="0 0 24 24"
                              fill="none"
                            >
                              <rect
                                opacity="0.3"
                                x={2}
                                y={2}
                                width={20}
                                height={20}
                                rx={10}
                                fill="black"
                              />
                              <path
                                d="M10.4343 12.4343L8.75 10.75C8.33579 10.3358 7.66421 10.3358 7.25 10.75C6.83579 11.1642 6.83579 11.8358 7.25 12.25L10.2929 15.2929C10.6834 15.6834 11.3166 15.6834 11.7071 15.2929L17.25 9.75C17.6642 9.33579 17.6642 8.66421 17.25 8.25C16.8358 7.83579 16.1642 7.83579 15.75 8.25L11.5657 12.4343C11.2533 12.7467 10.7467 12.7467 10.4343 12.4343Z"
                                fill="black"
                              />
                            </svg>
                          </span>
                        </div>
                        <div className="d-flex flex-stack mb-5">
                          <span
                            className={`${
                              selected === 2
                                ? "fw-bold fs-6 text-white opacity-75"
                                : "fw-bold fs-6 text-gray-800 text-start pe-3"
                            }`}
                          >
                            Targets Timelines &amp; Files
                          </span>
                          <span
                            className={`${
                              selected === 2
                                ? "svg-icon svg-icon-1 svg-icon-white"
                                : "svg-icon svg-icon-1 svg-icon-success"
                            }`}
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width={24}
                              height={24}
                              viewBox="0 0 24 24"
                              fill="none"
                            >
                              <rect
                                opacity="0.3"
                                x={2}
                                y={2}
                                width={20}
                                height={20}
                                rx={10}
                                fill="black"
                              />
                              <path
                                d="M10.4343 12.4343L8.75 10.75C8.33579 10.3358 7.66421 10.3358 7.25 10.75C6.83579 11.1642 6.83579 11.8358 7.25 12.25L10.2929 15.2929C10.6834 15.6834 11.3166 15.6834 11.7071 15.2929L17.25 9.75C17.6642 9.33579 17.6642 8.66421 17.25 8.25C16.8358 7.83579 16.1642 7.83579 15.75 8.25L11.5657 12.4343C11.2533 12.7467 10.7467 12.7467 10.4343 12.4343Z"
                                fill="black"
                              />
                            </svg>
                          </span>
                        </div>
                        <div className="d-flex flex-stack">
                          <span
                            className={`${
                              selected === 2
                                ? "fw-bold fs-6 text-white opacity-75"
                                : "fw-bold fs-6 text-gray-800 text-start pe-3"
                            }`}
                          >
                            Unlimited Projects
                          </span>
                          <span
                            className={`${
                              selected === 2
                                ? "svg-icon svg-icon-1 svg-icon-white"
                                : "svg-icon svg-icon-1 svg-icon-success"
                            }`}
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width={24}
                              height={24}
                              viewBox="0 0 24 24"
                              fill="none"
                            >
                              <rect
                                opacity="0.3"
                                x={2}
                                y={2}
                                width={20}
                                height={20}
                                rx={10}
                                fill="black"
                              />
                              <rect
                                x={7}
                                y="15.3137"
                                width={12}
                                height={2}
                                rx={1}
                                transform="rotate(-45 7 15.3137)"
                                fill="black"
                              />
                              <rect
                                x="8.41422"
                                y={7}
                                width={12}
                                height={2}
                                rx={1}
                                transform="rotate(45 8.41422 7)"
                                fill="black"
                              />
                            </svg>
                          </span>
                        </div>
                      </div>
                      <a
                        onClick={() => {
                          setSelected(2);
                        }}
                        className={`${
                          selected === 2
                            ? "btn btn-color-primary btn-active-light-primary btn-light"
                            : "btn btn-primary"
                        }`}
                      >
                        Select
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-xl-4">
                  <div className="d-flex h-100 align-items-center">
                    <div
                      className={`w-100 d-flex flex-column flex-center rounded-3 ${
                        selected === 3 ? "bg-primary" : "bg-body"
                      } py-15 px-10`}
                    >
                      <div className="mb-7 text-center">
                        <h1
                          className={`${
                            selected === 3
                              ? "text-white mb-5 fw-boldest"
                              : "text-dark mb-5 fw-boldest"
                          }`}
                        >
                          Enterprise
                        </h1>
                        <div
                          className={`${
                            selected === 3
                              ? "text-white opacity-75 fw-bold mb-5"
                              : "text-gray-400 fw-bold mb-5"
                          }`}
                        >
                          Best Settings for Enterprise
                        </div>
                        <div className="text-center">
                          <span
                            className={`${
                              selected === 3
                                ? "mb-2 text-white"
                                : "mb-2 text-primary"
                            }`}
                          >
                            $
                          </span>
                          <span
                            className={`${
                              selected === 3
                                ? "fs-3x fw-bolder text-white"
                                : "fs-3x fw-bolder text-primary"
                            }`}
                            data-kt-plan-price-month={999}
                            data-kt-plan-price-annual={9999}
                          >
                            {monthly
                              ? `${price.monthlyPrice.enterprise}`
                              : `${price.annualPrice.enterprise}`}
                          </span>
                          <span
                            className={`${
                              selected === 3
                                ? "fs-7 fw-bold text-white opacity-75"
                                : "fs-7 fw-bold opacity-50"
                            }`}
                            data-kt-plan-price-month="Mon"
                            data-kt-plan-price-annual="Ann"
                          >
                            / {monthly ? "Mon" : "Year"}
                          </span>
                        </div>
                      </div>
                      <div className="w-100 mb-10">
                        <div className="d-flex flex-stack mb-5">
                          <span
                            className={`${
                              selected === 3
                                ? "fw-bold fs-6 text-white opacity-75"
                                : "fw-bold fs-6 text-gray-800 text-start pe-3"
                            }`}
                          >
                            Up to 10 Active Users
                          </span>
                          <span
                            className={`${
                              selected === 3
                                ? "svg-icon svg-icon-1 svg-icon-white"
                                : "svg-icon svg-icon-1 svg-icon-success"
                            }`}
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width={24}
                              height={24}
                              viewBox="0 0 24 24"
                              fill="none"
                            >
                              <rect
                                opacity="0.3"
                                x={2}
                                y={2}
                                width={20}
                                height={20}
                                rx={10}
                                fill="black"
                              />
                              <path
                                d="M10.4343 12.4343L8.75 10.75C8.33579 10.3358 7.66421 10.3358 7.25 10.75C6.83579 11.1642 6.83579 11.8358 7.25 12.25L10.2929 15.2929C10.6834 15.6834 11.3166 15.6834 11.7071 15.2929L17.25 9.75C17.6642 9.33579 17.6642 8.66421 17.25 8.25C16.8358 7.83579 16.1642 7.83579 15.75 8.25L11.5657 12.4343C11.2533 12.7467 10.7467 12.7467 10.4343 12.4343Z"
                                fill="black"
                              />
                            </svg>
                          </span>
                        </div>
                        <div className="d-flex flex-stack mb-5">
                          <span
                            className={`${
                              selected === 3
                                ? "fw-bold fs-6 text-white opacity-75"
                                : "fw-bold fs-6 text-gray-800 text-start pe-3"
                            }`}
                          >
                            Up to 30 Project Integrations
                          </span>
                          <span
                            className={`${
                              selected === 3
                                ? "svg-icon svg-icon-1 svg-icon-white"
                                : "svg-icon svg-icon-1 svg-icon-success"
                            }`}
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width={24}
                              height={24}
                              viewBox="0 0 24 24"
                              fill="none"
                            >
                              <rect
                                opacity="0.3"
                                x={2}
                                y={2}
                                width={20}
                                height={20}
                                rx={10}
                                fill="black"
                              />
                              <path
                                d="M10.4343 12.4343L8.75 10.75C8.33579 10.3358 7.66421 10.3358 7.25 10.75C6.83579 11.1642 6.83579 11.8358 7.25 12.25L10.2929 15.2929C10.6834 15.6834 11.3166 15.6834 11.7071 15.2929L17.25 9.75C17.6642 9.33579 17.6642 8.66421 17.25 8.25C16.8358 7.83579 16.1642 7.83579 15.75 8.25L11.5657 12.4343C11.2533 12.7467 10.7467 12.7467 10.4343 12.4343Z"
                                fill="black"
                              />
                            </svg>
                          </span>
                        </div>
                        <div className="d-flex flex-stack mb-5">
                          <span
                            className={`${
                              selected === 3
                                ? "fw-bold fs-6 text-white opacity-75"
                                : "fw-bold fs-6 text-gray-800 text-start pe-3"
                            }`}
                          >
                            Keen Analytics Platform
                          </span>
                          <span
                            className={`${
                              selected === 3
                                ? "svg-icon svg-icon-1 svg-icon-white"
                                : "svg-icon svg-icon-1 svg-icon-success"
                            }`}
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width={24}
                              height={24}
                              viewBox="0 0 24 24"
                              fill="none"
                            >
                              <rect
                                opacity="0.3"
                                x={2}
                                y={2}
                                width={20}
                                height={20}
                                rx={10}
                                fill="black"
                              />
                              <path
                                d="M10.4343 12.4343L8.75 10.75C8.33579 10.3358 7.66421 10.3358 7.25 10.75C6.83579 11.1642 6.83579 11.8358 7.25 12.25L10.2929 15.2929C10.6834 15.6834 11.3166 15.6834 11.7071 15.2929L17.25 9.75C17.6642 9.33579 17.6642 8.66421 17.25 8.25C16.8358 7.83579 16.1642 7.83579 15.75 8.25L11.5657 12.4343C11.2533 12.7467 10.7467 12.7467 10.4343 12.4343Z"
                                fill="black"
                              />
                            </svg>
                          </span>
                        </div>
                        <div className="d-flex flex-stack mb-5">
                          <span
                            className={`${
                              selected === 3
                                ? "fw-bold fs-6 text-white opacity-75"
                                : "fw-bold fs-6 text-gray-800 text-start pe-3"
                            }`}
                          >
                            Targets Timelines &amp; Files
                          </span>
                          <span
                            className={`${
                              selected === 3
                                ? "svg-icon svg-icon-1 svg-icon-white"
                                : "svg-icon svg-icon-1 svg-icon-success"
                            }`}
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width={24}
                              height={24}
                              viewBox="0 0 24 24"
                              fill="none"
                            >
                              <rect
                                opacity="0.3"
                                x={2}
                                y={2}
                                width={20}
                                height={20}
                                rx={10}
                                fill="black"
                              />
                              <path
                                d="M10.4343 12.4343L8.75 10.75C8.33579 10.3358 7.66421 10.3358 7.25 10.75C6.83579 11.1642 6.83579 11.8358 7.25 12.25L10.2929 15.2929C10.6834 15.6834 11.3166 15.6834 11.7071 15.2929L17.25 9.75C17.6642 9.33579 17.6642 8.66421 17.25 8.25C16.8358 7.83579 16.1642 7.83579 15.75 8.25L11.5657 12.4343C11.2533 12.7467 10.7467 12.7467 10.4343 12.4343Z"
                                fill="black"
                              />
                            </svg>
                          </span>
                        </div>
                        <div className="d-flex flex-stack">
                          <span
                            className={`${
                              selected === 3
                                ? "fw-bold fs-6 text-white opacity-75"
                                : "fw-bold fs-6 text-gray-800 text-start pe-3"
                            }`}
                          >
                            Unlimited Projects
                          </span>
                          <span
                            className={`${
                              selected === 3
                                ? "svg-icon svg-icon-1 svg-icon-white"
                                : "svg-icon svg-icon-1 svg-icon-success"
                            }`}
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width={24}
                              height={24}
                              viewBox="0 0 24 24"
                              fill="none"
                            >
                              <rect
                                opacity="0.3"
                                x={2}
                                y={2}
                                width={20}
                                height={20}
                                rx={10}
                                fill="black"
                              />
                              <path
                                d="M10.4343 12.4343L8.75 10.75C8.33579 10.3358 7.66421 10.3358 7.25 10.75C6.83579 11.1642 6.83579 11.8358 7.25 12.25L10.2929 15.2929C10.6834 15.6834 11.3166 15.6834 11.7071 15.2929L17.25 9.75C17.6642 9.33579 17.6642 8.66421 17.25 8.25C16.8358 7.83579 16.1642 7.83579 15.75 8.25L11.5657 12.4343C11.2533 12.7467 10.7467 12.7467 10.4343 12.4343Z"
                                fill="black"
                              />
                            </svg>
                          </span>
                        </div>
                      </div>
                      <a
                        onClick={() => {
                          setSelected(3);
                        }}
                        className={`${
                          selected === 3
                            ? "btn btn-color-primary btn-active-light-primary btn-light"
                            : "btn btn-primary"
                        }`}
                      >
                        Select
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="landing-curve landing-dark-color">
        <svg
          viewBox="15 12 1470 48"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0 11C3.93573 11.3356 7.85984 11.6689 11.7725 12H1488.16C1492.1 11.6689 1496.04 11.3356 1500 11V12H1488.16C913.668 60.3476 586.282 60.6117 11.7725 12H0V11Z"
            fill="currentColor"
          />
        </svg>
      </div>
    </div>
  );
};

export default Price;
