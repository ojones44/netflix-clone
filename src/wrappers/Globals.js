import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`

:root {
	--fletnix-primary: ${({ theme }) => theme.colors.primary};
	--fletnix-white: hsl(0, 0%, 100%);
	--fletnix-black: hsl(0, 0%, 0%);
	--fletnix-grey-light: hsl(0, 0%, 31%);
	--fletnix-secondary: ${({ theme }) => theme.colors.secondary};
	--fletnix-grey-med: rgba(255, 255, 255, 0.7);
	--clr-bg: ${({ theme }) => theme.colors.background};
	--clr-text: ${({ theme }) => theme.colors.color};

	--fs-900: 3rem;
	--fs-700: 1.5rem;
	--fs-600: 1.25rem;
	--fs-500: 1rem;
	--fs-400: 0.875rem;

	--fw-400: 400;
	--fw-900: 900;

	--nav-height: 90px;

	--ff-primary: ${({ theme }) => theme.typography.primary};
	--ff-secondary: ${({ theme }) => theme.typography.secondary}, "Bebas Neue";

	--section-width: 85%;
	--section-gutter: calc((100% - var(--section-width)) / 2);
}

html {
	box-sizing: border-box;
	font-size: var(--fs-500);
}

svg {
	cursor: pointer;
	padding: 0.2rem;
	border-radius: 100vmax;
}

svg:hover {
	background-color: rgba(0, 0, 0, 0.1) 
}
*,
*:before,
*:after {
	box-sizing: inherit;
}

body,
h1,
h2,
h3,
h4,
h5,
h6,
p,
ol,
ul {
	margin: 0;
	padding: 0;
	font-weight: normal;
}

body {
	background-color: var(--clr-bg);
	color: var(--clr-text);
	font-family: var(--ff-primary);
	font-weight: var(--fw-400);
	font-size: var(--fs-600);
    margin-bottom: 80px;
	transition: all 0.4s ease;
}

::selection {
	background-color: var(--fletnix-primary);
}

ol,
ul {
	list-style: none;
}

img {
	max-width: 100%;
	height: auto;
	max-height: 500px;
	border-radius: ${({ theme }) =>
    theme.roundUI ? theme.style.borderRadius : "0px"};
}

button {
	font-family: inherit;
	font-weight: var(--fw-900);
	background-color: var(--fletnix-primary);
	color: var(--fletnix-white);
	border: none;
	border-radius: ${({ theme }) =>
    theme.roundUI ? theme.style.borderRadius : "0px"};
	padding: 0.5em 1em;
	font-size: var(--fs-400);
	cursor: pointer;
	transition: all 0.4s ease;
}

button:hover {
	background-color: var(--fletnix-secondary);
	transition: 0.5s ease;
}

input, select {
    background-color: rgba(0, 0, 0, 0.5);
    color: var(--fletnix-white);
    padding-left: 15px;
    border: 1px solid var(--fletnix-grey-light);
    border-radius: ${({ theme }) =>
      theme.roundUI ? theme.style.borderRadius : "0px"};
	transition: all 0.4s ease;
  }

select {
	padding: 0.5rem 1rem;
	text-transform: capitalize;
	background-color: var(--fletnix-primary);
}

option {
	text-transform: capitalize;
}

input:active,
input:focus {
	appearance: none;
	outline: 3px solid var(--fletnix-white);
	outline-offset: 1px;
}

a:visited {
	color: var(--clr-text);
}


/* Utility classes */


.heading {
	font-weight: var(--fw-900);
	font-size: var(--fs-900);
}

.btn-lg {
	font-size: var(--fs-700);
}

.container {
	width: var(--section-width);
	margin-inline: var(--section-gutter);
}

.faq-heading {
	padding-top: 50px;
	padding-bottom: 20px;
	text-align: center;
}

/* Styling */

.swiper-slide {
	border-radius: ${({ theme }) =>
    theme.roundUI ? theme.style.borderRadius : "0px"};
}


@media (max-width: 768px) {
	:root {
		--fs-900: 2rem;
		--fs-600: 1.125rem;
	}

}

`;
