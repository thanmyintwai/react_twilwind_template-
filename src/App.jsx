import { useState } from 'react'
import Form from '@rjsf/core';
import validator from '@rjsf/validator-ajv8';


import { Button, MegaMenu, Navbar } from 'flowbite-react';


import TextWidget from './widgets/TextWidget';
import NumberWidget from './widgets/NumberWidget';
import SelectWidget from './widgets/SelectWidget';
import CheckboxWidget from './widgets/CheckboxWidget';
import TextareaWidget from './widgets/TextareaWidget';


const widgets = {
  TextWidget,
  NumberWidget,
  SelectWidget,
  CheckboxWidget,
  TextareaWidget,
  customNumberWidget: NumberWidget,
};

function App() {

  return (
    <>
      <MegaMenu>
        <div className="mx-auto flex max-w-screen-xl flex-wrap items-center justify-between p-4 md:space-x-8">
          <Navbar.Brand href="/">
            <img alt="" src="/favicon.svg" className="mr-3 h-6 sm:h-9" />
            <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">Flowbite</span>
          </Navbar.Brand>
          <div className="order-2 hidden items-center md:flex">
            <a
              href="#"
              className="mr-1 rounded-lg px-4 py-2 text-sm font-medium text-gray-800 hover:bg-gray-50 focus:outline-none focus:ring-4 focus:ring-gray-300 dark:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-800 md:mr-2 md:px-5 md:py-2.5"
            >
              Login
            </a>
            <Button href="#">Sign up</Button>
          </div>
          <Navbar.Toggle />
          <Navbar.Collapse>
            <Navbar.Link href="#">Home</Navbar.Link>
            <Navbar.Link>
              <MegaMenu.Dropdown toggle={<>Company</>}>
                <ul className="grid grid-cols-3">
                  <div className="space-y-4 p-4">
                    <li>
                      <a href="#" className="hover:text-primary-600 dark:hover:text-primary-500">
                        About Us
                      </a>
                    </li>
                    <li>
                      <a href="#" className="hover:text-primary-600 dark:hover:text-primary-500">
                        Library
                      </a>
                    </li>
                    <li>
                      <a href="#" className="hover:text-primary-600 dark:hover:text-primary-500">
                        Resources
                      </a>
                    </li>
                    <li>
                      <a href="#" className="hover:text-primary-600 dark:hover:text-primary-500">
                        Pro Version
                      </a>
                    </li>
                  </div>
                  <div className="space-y-4 p-4">
                    <li>
                      <a href="#" className="hover:text-primary-600 dark:hover:text-primary-500">
                        Contact Us
                      </a>
                    </li>
                    <li>
                      <a href="#" className="hover:text-primary-600 dark:hover:text-primary-500">
                        Support Center
                      </a>
                    </li>
                    <li>
                      <a href="#" className="hover:text-primary-600 dark:hover:text-primary-500">
                        Terms
                      </a>
                    </li>
                    <li>
                      <a href="#" className="hover:text-primary-600 dark:hover:text-primary-500">
                        Blog
                      </a>
                    </li>
                  </div>
                  <div className="space-y-4 p-4">
                    <li>
                      <a href="#" className="hover:text-primary-600 dark:hover:text-primary-500">
                        Newsletter
                      </a>
                    </li>
                    <li>
                      <a href="#" className="hover:text-primary-600 dark:hover:text-primary-500">
                        Playground
                      </a>
                    </li>
                    <li>
                      <a href="#" className="hover:text-primary-600 dark:hover:text-primary-500">
                        License
                      </a>
                    </li>
                  </div>
                </ul>
              </MegaMenu.Dropdown>
            </Navbar.Link>
            <Navbar.Link href="#">Team</Navbar.Link>
            <Navbar.Link href="#">Contact</Navbar.Link>
          </Navbar.Collapse>
        </div>
      </MegaMenu>
      <div class="container mx-auto">
      <Form
    schema={{title: "A form",
      type: "object",
      properties: {
        name: { type: "string", title: "Name" },
        age: { type: "number", title: "Age" },
        gender: {
          type: "string",
          title: "Gender",
          enum: ["male", "female", "other"]
        },
        bio: { type: "string", title: "Biography" },
        subscribe: { type: "boolean", title: "Subscribe to newsletter" }
      }}}
    uiSchema={{
      age: {
        "ui:widget": "customNumberWidget"
      },
     // name: {
     //   "ui:autofocus": true,
     //   "ui:emptyValue": "",
     //},
    //  age: {
       // "ui:widget": CustomTextWidget,
       // "ui:classNames": "w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500",

        
      //},
    }}
    widgets={widgets}
    formData={{}}
    validator={validator}
  />
      </div>
    </>
  );
}

export default App
