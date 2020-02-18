import React from 'react'

import { Logo } from '../SVG/Logo'
import { StyledContainer } from '../../styles/global/layout'
import { StyledAbout } from './StyledAbout'

const About = () => (
	<StyledAbout>
		<StyledContainer>
			<Logo />
			<div className="strip">
				<img src="/about-1.jpg" alt=""/>
				<img src="/about-2.jpg" alt=""/>
				<img src="/about-3.jpg" alt=""/>
			</div>
			<div className="content">
				<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 617 259"><title>When it comes to art, mine is about identity.</title><path d="M18.3 16.16L14.28 45.8h-.12L10.8 16.16H0L7.32 59h12.24l3.72-28.8h.12L27.12 59h12.24l7.32-42.84h-10.8l-3 29.64h-.12l-4.38-29.64H18.3zm30.1696 0V59h10.8V37.58c0-1.36.2-2.34.6-2.94.4-.6 1.08-.9 2.04-.9s1.64.3 2.04.9c.4.6.6 1.58.6 2.94V59h10.8V34.52c0-1.68-.24-3.08-.72-4.2-.44-1.16-1.06-2.08-1.86-2.76-.76-.68-1.66-1.16-2.7-1.44-1-.28-2.06-.42-3.18-.42-1.32 0-2.68.32-4.08.96-1.36.6-2.5 1.76-3.42 3.48h-.12V16.16h-10.8zm46.5623 21.12v1.44h-5.94v-1.44c0-1.72.2-2.98.6-3.78.44-.8 1.22-1.2 2.34-1.2 1.16 0 1.94.4 2.34 1.2.44.8.66 2.06.66 3.78zm-5.94 7.32h16.0201v-3.3c0-2.96-.28-5.42-.84-7.38-.52-2-1.34-3.6-2.46-4.8-1.08-1.24-2.4401-2.12-4.0801-2.64-1.6-.52-3.48-.78-5.64-.78-2.44 0-4.54.32-6.3.96-1.72.6-3.14 1.58-4.26 2.94-1.12 1.36-1.94 3.12-2.46 5.28s-.78 4.8-.78 7.92c0 3.08.22 5.7.66 7.86.48 2.16 1.26 3.92 2.34 5.28 1.08 1.32 2.5 2.28 4.26 2.88 1.76.56 3.94.84 6.54.84 4.48 0 7.7-1 9.6601-3 1.96-2.04 2.98-5.06 3.06-9.06h-9.7201c0 2.2-.28 3.7-.84 4.5-.52.76-1.26 1.14-2.22 1.14-.76 0-1.44-.28-2.04-.84-.6-.6-.9-1.78-.9-3.54V44.6zm18.6571-18.06V59h10.8V37.58c0-1.36.2-2.34.6-2.94.4-.6 1.08-.9 2.04-.9s1.64.3 2.04.9c.4.6.6 1.58.6 2.94V59h10.8V34.52c0-1.76-.22-3.2-.66-4.32-.44-1.12-1.04-2.02-1.8-2.7-.76-.68-1.66-1.14-2.7-1.38-1-.28-2.1-.42-3.3-.42-3.84 0-6.46 1.6-7.86 4.8h-.12v-3.96h-10.44zm46.159-10.38v8.04h10.8v-8.04h-10.8zm0 10.38V59h10.8V26.54h-10.8zm12.859 0v7.26h3.6v17.28c0 1.8.16 3.26.48 4.38.36 1.08.9 1.9 1.62 2.46.76.56 1.72.92 2.88 1.08 1.16.12 2.56.18 4.2.18.92 0 1.88-.04 2.88-.12 1-.04 2-.06 3-.06v-7.2h-1.68c-.88 0-1.54-.18-1.98-.54-.4-.4-.6-1.06-.6-1.98V33.8h4.26v-7.26h-4.26V17h-10.8v9.54h-3.6zm51.912 12.72h9.72c0-2.04-.2-3.88-.6-5.52-.36-1.68-1.02-3.1-1.98-4.26-.92-1.2-2.18-2.12-3.78-2.76-1.56-.68-3.54-1.02-5.94-1.02-2.04 0-3.94.2-5.7.6-1.76.4-3.3 1.22-4.62 2.46-1.28 1.24-2.3 3.02-3.06 5.34-.76 2.32-1.14 5.4-1.14 9.24 0 3.52.34 6.36 1.02 8.52.68 2.12 1.62 3.78 2.82 4.98 1.24 1.16 2.72 1.92 4.44 2.28 1.72.36 3.62.54 5.7.54 4.6 0 7.92-1.08 9.96-3.24 1.04-1.16 1.78-2.64 2.22-4.44.44-1.8.66-3.98.66-6.54h-9.72v2.1c0 2.04-.28 3.44-.84 4.2-.52.76-1.28 1.14-2.28 1.14-.6 0-1.12-.14-1.56-.42-.4-.32-.72-.86-.96-1.62-.24-.76-.42-1.78-.54-3.06-.08-1.32-.12-2.98-.12-4.98 0-2 .04-3.64.12-4.92.12-1.32.3-2.36.54-3.12.24-.8.56-1.34.96-1.62.44-.32.96-.48 1.56-.48 1.16 0 1.96.46 2.4 1.38.24.52.42 1.2.54 2.04.12.8.18 1.86.18 3.18zm22.197 3.54c0-2.04.04-3.72.12-5.04.08-1.32.24-2.36.48-3.12.24-.76.54-1.28.9-1.56.4-.28.9-.42 1.5-.42s1.1.14 1.5.42c.4.28.7.8.9 1.56.24.76.4 1.8.48 3.12.08 1.32.12 3 .12 5.04s-.04 3.72-.12 5.04c-.08 1.28-.24 2.3-.48 3.06-.2.76-.5 1.28-.9 1.56s-.9.42-1.5.42-1.1-.14-1.5-.42c-.36-.28-.66-.8-.9-1.56s-.4-1.78-.48-3.06c-.08-1.32-.12-3-.12-5.04zm16.8 0c0-2.36-.14-4.56-.42-6.6-.24-2.08-.82-3.9-1.74-5.46s-2.3-2.78-4.14-3.66c-1.84-.92-4.34-1.38-7.5-1.38-3.04 0-5.48.5-7.32 1.5-1.8.96-3.18 2.24-4.14 3.84-.96 1.6-1.6 3.42-1.92 5.46-.28 2.04-.42 4.12-.42 6.24 0 2.36.12 4.58.36 6.66.28 2.04.88 3.84 1.8 5.4.92 1.52 2.3 2.72 4.14 3.6 1.84.84 4.34 1.26 7.5 1.26 3.04 0 5.46-.46 7.26-1.38 1.84-.96 3.24-2.22 4.2-3.78.96-1.6 1.58-3.42 1.86-5.46.32-2.04.48-4.12.48-6.24zm18.751-5.22V59h10.8V37.58c0-1.36.2-2.34.6-2.94.4-.6 1.08-.9 2.04-.9s1.64.3 2.04.9c.4.6.6 1.58.6 2.94V59h10.8V34.52c0-1.76-.22-3.2-.66-4.32-.44-1.12-1.04-2.02-1.8-2.7-.76-.68-1.66-1.14-2.7-1.38-1-.28-2.1-.42-3.3-.42-1.68 0-3.26.38-4.74 1.14-1.44.72-2.58 2-3.42 3.84-.68-1.68-1.62-2.92-2.82-3.72-1.16-.84-2.86-1.26-5.1-1.26-3.84 0-6.46 1.6-7.86 4.8h-.12v-3.96h-10.44V59h10.8V37.58c0-1.36.2-2.34.6-2.94.4-.6 1.08-.9 2.04-.9s1.64.3 2.04.9c.4.6.6 1.58.6 2.94zm46.309-.3v1.44h-5.94v-1.44c0-1.72.2-2.98.6-3.78.44-.8 1.22-1.2 2.34-1.2 1.16 0 1.94.4 2.34 1.2.44.8.66 2.06.66 3.78zm-5.94 7.32h16.02v-3.3c0-2.96-.28-5.42-.84-7.38-.52-2-1.34-3.6-2.46-4.8-1.08-1.24-2.44-2.12-4.08-2.64-1.6-.52-3.48-.78-5.64-.78-2.44 0-4.54.32-6.3.96-1.72.6-3.14 1.58-4.26 2.94-1.12 1.36-1.94 3.12-2.46 5.28s-.78 4.8-.78 7.92c0 3.08.22 5.7.66 7.86.48 2.16 1.26 3.92 2.34 5.28 1.08 1.32 2.5 2.28 4.26 2.88 1.76.56 3.94.84 6.54.84 4.48 0 7.7-1 9.66-3 1.96-2.04 2.98-5.06 3.06-9.06h-9.72c0 2.2-.28 3.7-.84 4.5-.52.76-1.26 1.14-2.22 1.14-.76 0-1.44-.28-2.04-.84-.6-.6-.9-1.78-.9-3.54V44.6zm26.997 4.32h-9.48c0 3.56.98 6.24 2.94 8.04 2 1.8 5.26 2.7 9.78 2.7 2.04 0 3.86-.24 5.46-.72 1.64-.48 3-1.2 4.08-2.16 1.12-.96 1.98-2.1 2.58-3.42.6-1.32.9-2.78.9-4.38 0-2.08-.4-3.74-1.2-4.98-.76-1.28-1.72-2.28-2.88-3-1.16-.76-2.42-1.34-3.78-1.74-1.32-.4-2.56-.78-3.72-1.14-1.16-.36-2.14-.76-2.94-1.2-.76-.48-1.14-1.18-1.14-2.1 0-.8.26-1.42.78-1.86.52-.44 1.18-.66 1.98-.66.92 0 1.62.26 2.1.78.52.48.78 1.42.78 2.82h9.36c0-6.8-4.06-10.2-12.18-10.2-2.2 0-4.12.26-5.76.78-1.6.52-2.94 1.24-4.02 2.16-1.04.92-1.82 2-2.34 3.24-.52 1.2-.78 2.52-.78 3.96 0 2.04.38 3.7 1.14 4.98.8 1.24 1.78 2.24 2.94 3 1.16.76 2.4 1.36 3.72 1.8 1.36.44 2.62.86 3.78 1.26 1.16.4 2.12.86 2.88 1.38.8.52 1.2 1.26 1.2 2.22 0 .88-.32 1.56-.96 2.04-.6.48-1.32.72-2.16.72-1 0-1.76-.38-2.28-1.14-.28-.36-.48-.82-.6-1.38-.12-.56-.18-1.16-.18-1.8zm32.201-22.38v7.26h3.6v17.28c0 1.8.16 3.26.48 4.38.36 1.08.9 1.9 1.62 2.46.76.56 1.72.92 2.88 1.08 1.16.12 2.56.18 4.2.18.92 0 1.88-.04 2.88-.12 1-.04 2-.06 3-.06v-7.2h-1.68c-.88 0-1.54-.18-1.98-.54-.4-.4-.6-1.06-.6-1.98V33.8h4.26v-7.26h-4.26V17h-10.8v9.54h-3.6zM406.41 42.8c0-2.04.04-3.72.12-5.04.08-1.32.24-2.36.48-3.12.24-.76.54-1.28.9-1.56.4-.28.9-.42 1.5-.42s1.1.14 1.5.42c.4.28.7.8.9 1.56.24.76.4 1.8.48 3.12.08 1.32.12 3 .12 5.04s-.04 3.72-.12 5.04c-.08 1.28-.24 2.3-.48 3.06-.2.76-.5 1.28-.9 1.56s-.9.42-1.5.42-1.1-.14-1.5-.42c-.36-.28-.66-.8-.9-1.56s-.4-1.78-.48-3.06c-.08-1.32-.12-3-.12-5.04zm16.8 0c0-2.36-.14-4.56-.42-6.6-.24-2.08-.82-3.9-1.74-5.46s-2.3-2.78-4.14-3.66c-1.84-.92-4.34-1.38-7.5-1.38-3.04 0-5.48.5-7.32 1.5-1.8.96-3.18 2.24-4.14 3.84-.96 1.6-1.6 3.42-1.92 5.46-.28 2.04-.42 4.12-.42 6.24 0 2.36.12 4.58.36 6.66.28 2.04.88 3.84 1.8 5.4.92 1.52 2.3 2.72 4.14 3.6 1.84.84 4.34 1.26 7.5 1.26 3.04 0 5.46-.46 7.26-1.38 1.84-.96 3.24-2.22 4.2-3.78.96-1.6 1.58-3.42 1.86-5.46.32-2.04.48-4.12.48-6.24zm29.926 9.78c-.8 0-1.44-.32-1.92-.96-.48-.64-.72-1.5-.72-2.58s.16-1.94.48-2.58c.32-.68.9-1.22 1.74-1.62.8-.36 1.52-.58 2.16-.66.68-.12 1.18-.4 1.5-.84h.12v3.9c0 1.8-.26 3.14-.78 4.02-.52.88-1.38 1.32-2.58 1.32zm4.02 6.42h10.44c-.44-.84-.72-1.84-.84-3s-.18-2.5-.18-4.02V36.14c0-2.12-.32-3.84-.96-5.16-.6-1.36-1.48-2.42-2.64-3.18-1.12-.8-2.48-1.34-4.08-1.62-1.56-.32-3.28-.48-5.16-.48-1.24 0-2.58.14-4.02.42-1.44.24-2.78.76-4.02 1.56-1.24.76-2.28 1.86-3.12 3.3-.84 1.4-1.26 3.28-1.26 5.64h9.36c.04-1.72.3-2.86.78-3.42.48-.6 1.24-.9 2.28-.9 1.84 0 2.76 1 2.76 3 0 1-.24 1.78-.72 2.34-.48.52-1.3.92-2.46 1.2l-4.26 1.02c-1.72.4-3.16.9-4.32 1.5-1.16.56-2.08 1.26-2.76 2.1-.68.8-1.18 1.76-1.5 2.88-.28 1.12-.42 2.44-.42 3.96 0 1.4.16 2.68.48 3.84.32 1.16.84 2.16 1.56 3 .72.84 1.64 1.46 2.76 1.86 1.16.44 2.56.66 4.2.66 1.68 0 3.16-.36 4.44-1.08 1.32-.72 2.28-1.8 2.88-3.24h.12c.08.68.16 1.32.24 1.92.08.6.22 1.18.42 1.74zm13.531-32.46V59h10.8V41.3c0-2.16.52-3.66 1.56-4.5 1.08-.84 2.58-1.26 4.5-1.26.44 0 .88.02 1.32.06.44.04.9.1 1.38.18V25.7h-1.74c-1.6 0-3.06.52-4.38 1.56-1.32 1-2.28 2.48-2.88 4.44h-.12v-5.16h-10.44zm18.964 0v7.26h3.6v17.28c0 1.8.16 3.26.48 4.38.36 1.08.9 1.9 1.62 2.46.76.56 1.72.92 2.88 1.08 1.16.12 2.56.18 4.2.18.92 0 1.88-.04 2.88-.12 1-.04 2-.06 3-.06v-7.2h-1.68c-.88 0-1.54-.18-1.98-.54-.4-.4-.6-1.06-.6-1.98V33.8h4.26v-7.26h-4.26V17h-10.8v9.54h-3.6zm21.176 20.58v11.52h3.84v.54c0 1.6-.28 2.8-.84 3.6-.56.8-1.56 1.28-3 1.44v5.16c3.6-.08 6.18-1.06 7.74-2.94 1.56-1.88 2.34-4.72 2.34-8.52v-10.8h-10.08zM2.22 90.16V133h10.44v-31.92h.12L18.72 133h8.04l5.94-31.92h.12V133h10.44V90.16H27.3l-4.5 25.38h-.12l-4.5-25.38H2.22zm45.1991 0v8.04h10.8v-8.04h-10.8zm0 10.38V133h10.8v-32.46h-10.8zm14.8992 0V133h10.8v-21.42c0-1.36.2-2.34.6-2.94.4-.6 1.08-.9 2.04-.9s1.64.3 2.04.9c.4.6.6 1.58.6 2.94V133h10.8v-24.48c0-1.76-.22-3.2-.66-4.32-.44-1.12-1.04-2.02-1.8-2.7-.76-.68-1.66-1.14-2.7-1.38-1-.28-2.1-.42-3.3-.42-3.84 0-6.46 1.6-7.86 4.8h-.12v-3.96h-10.44zm46.5627 10.74v1.44h-5.94v-1.44c0-1.72.2-2.98.6-3.78.44-.8 1.22-1.2 2.34-1.2 1.16 0 1.94.4 2.34 1.2.44.8.66 2.06.66 3.78zm-5.94 7.32h16.02v-3.3c0-2.96-.28-5.42-.84-7.38-.52-2-1.34-3.6-2.46-4.8-1.08-1.24-2.44-2.12-4.08-2.64-1.6-.52-3.48-.78-5.64-.78-2.44 0-4.54.32-6.3005.96-1.72.6-3.14 1.58-4.26 2.94-1.12 1.36-1.94 3.12-2.46 5.28s-.78 4.8-.78 7.92c0 3.08.22 5.7.66 7.86.48 2.16 1.26 3.92 2.34 5.28 1.08 1.32 2.5 2.28 4.26 2.88 1.7605.56 3.9405.84 6.5405.84 4.48 0 7.7-1 9.66-3 1.96-2.04 2.98-5.06 3.06-9.06h-9.72c0 2.2-.28 3.7-.84 4.5-.52.76-1.26 1.14-2.22 1.14-.76 0-1.44-.28-2.04-.84-.6-.6-.9-1.78-.9-3.54v-4.26zm34.033-28.44v8.04h10.8v-8.04h-10.8zm0 10.38V133h10.8v-32.46h-10.8zm23.239 22.38h-9.48c0 3.56.98 6.24 2.94 8.04 2 1.8 5.26 2.7 9.78 2.7 2.04 0 3.86-.24 5.46-.72 1.64-.48 3-1.2 4.08-2.16 1.12-.96 1.98-2.1 2.58-3.42.6-1.32.9-2.78.9-4.38 0-2.08-.4-3.74-1.2-4.98-.76-1.28-1.72-2.28-2.88-3-1.16-.76-2.42-1.34-3.78-1.74-1.32-.4-2.56-.78-3.72-1.14-1.16-.36-2.14-.76-2.94-1.2-.76-.48-1.14-1.18-1.14-2.1 0-.8.26-1.42.78-1.86.52-.44 1.18-.66 1.98-.66.92 0 1.62.26 2.1.78.52.48.78 1.42.78 2.82h9.36c0-6.8-4.06-10.2-12.18-10.2-2.2 0-4.12.26-5.76.78-1.6.52-2.94 1.24-4.02 2.16-1.04.92-1.82 2-2.34 3.24-.52 1.2-.78 2.52-.78 3.96 0 2.04.38 3.7 1.14 4.98.8 1.24 1.78 2.24 2.94 3 1.16.76 2.4 1.36 3.72 1.8 1.36.44 2.62.86 3.78 1.26 1.16.4 2.12.86 2.88 1.38.8.52 1.2 1.26 1.2 2.22 0 .88-.32 1.56-.96 2.04-.6.48-1.32.72-2.16.72-1 0-1.76-.38-2.28-1.14-.28-.36-.48-.82-.6-1.38-.12-.56-.18-1.16-.18-1.8zm46 3.66c-.8 0-1.44-.32-1.92-.96-.48-.64-.72-1.5-.72-2.58s.16-1.94.48-2.58c.32-.68.9-1.22 1.74-1.62.8-.36 1.52-.58 2.16-.66.68-.12 1.18-.4 1.5-.84h.12v3.9c0 1.8-.26 3.14-.78 4.02-.52.88-1.38 1.32-2.58 1.32zm4.02 6.42h10.44c-.44-.84-.72-1.84-.84-3s-.18-2.5-.18-4.02v-15.84c0-2.12-.32-3.84-.96-5.16-.6-1.36-1.48-2.42-2.64-3.18-1.12-.8-2.48-1.34-4.08-1.62-1.56-.32-3.28-.48-5.16-.48-1.24 0-2.58.14-4.02.42-1.44.24-2.78.76-4.02 1.56-1.24.76-2.28 1.86-3.12 3.3-.84 1.4-1.26 3.28-1.26 5.64h9.36c.04-1.72.3-2.86.78-3.42.48-.6 1.24-.9 2.28-.9 1.84 0 2.76 1 2.76 3 0 1-.24 1.78-.72 2.34-.48.52-1.3.92-2.46 1.2l-4.26 1.02c-1.72.4-3.16.9-4.32 1.5-1.16.56-2.08 1.26-2.76 2.1-.68.8-1.18 1.76-1.5 2.88-.28 1.12-.42 2.44-.42 3.96 0 1.4.16 2.68.48 3.84.32 1.16.84 2.16 1.56 3 .72.84 1.64 1.46 2.76 1.86 1.16.44 2.56.66 4.2.66 1.68 0 3.16-.36 4.44-1.08 1.32-.72 2.28-1.8 2.88-3.24h.12c.08.68.16 1.32.24 1.92.08.6.22 1.18.42 1.74zm24.811-16.2c0-1.76.04-3.22.12-4.38.08-1.16.22-2.08.42-2.76.24-.72.56-1.22.96-1.5.4-.28.9-.42 1.5-.42.64 0 1.16.14 1.56.42.4.28.7.78.9 1.5.24.68.4 1.6.48 2.76.08 1.16.12 2.62.12 4.38 0 1.72-.04 3.16-.12 4.32-.08 1.16-.24 2.1-.48 2.82-.2.68-.5 1.16-.9 1.44s-.92.42-1.56.42c-.6 0-1.1-.14-1.5-.42-.4-.28-.72-.76-.96-1.44-.2-.72-.34-1.66-.42-2.82-.08-1.16-.12-2.6-.12-4.32zm-10.8-26.64V133h10.44v-4.44h.12c.68 1.8 1.6 3.1 2.76 3.9 1.16.8 2.7 1.2 4.62 1.2 3.6 0 6.12-1.42 7.56-4.26 1.44-2.84 2.16-7.28 2.16-13.32 0-3.12-.24-5.72-.72-7.8-.44-2.12-1.08-3.8-1.92-5.04-.84-1.28-1.88-2.18-3.12-2.7-1.24-.56-2.64-.84-4.2-.84-1.52 0-2.9.34-4.14 1.02-1.2.64-2.08 1.8-2.64 3.48h-.12V90.16h-10.8zm40.442 26.64c0-2.04.04-3.72.12-5.04.08-1.32.24-2.36.48-3.12.24-.76.54-1.28.9-1.56.4-.28.9-.42 1.5-.42s1.1.14 1.5.42c.4.28.7.8.9 1.56.24.76.4 1.8.48 3.12.08 1.32.12 3 .12 5.04s-.04 3.72-.12 5.04c-.08 1.28-.24 2.3-.48 3.06-.2.76-.5 1.28-.9 1.56s-.9.42-1.5.42-1.1-.14-1.5-.42c-.36-.28-.66-.8-.9-1.56s-.4-1.78-.48-3.06c-.08-1.32-.12-3-.12-5.04zm16.8 0c0-2.36-.14-4.56-.42-6.6-.24-2.08-.82-3.9-1.74-5.46s-2.3-2.78-4.14-3.66c-1.84-.92-4.34-1.38-7.5-1.38-3.04 0-5.48.5-7.32 1.5-1.8.96-3.18 2.24-4.14 3.84-.96 1.6-1.6 3.42-1.92 5.46-.28 2.04-.42 4.12-.42 6.24 0 2.36.12 4.58.36 6.66.28 2.04.88 3.84 1.8 5.4.92 1.52 2.3 2.72 4.14 3.6 1.84.84 4.34 1.26 7.5 1.26 3.04 0 5.46-.46 7.26-1.38 1.84-.96 3.24-2.22 4.2-3.78.96-1.6 1.58-3.42 1.86-5.46.32-2.04.48-4.12.48-6.24zm2.97-16.26v24.48c0 1.72.22 3.16.66 4.32.44 1.12 1.04 2.02 1.8 2.7.76.64 1.64 1.06 2.64 1.26 1.04.24 2.16.36 3.36.36 3.88 0 6.5-1.54 7.86-4.62h.12V133h10.44v-32.46h-10.8v21.42c0 1.36-.2 2.34-.6 2.94-.4.6-1.08.9-2.04.9s-1.64-.3-2.04-.9c-.4-.6-.6-1.58-.6-2.94v-21.42h-10.8zm28.743 0v7.26h3.6v17.28c0 1.8.16 3.26.48 4.38.36 1.08.9 1.9 1.62 2.46.76.56 1.72.92 2.88 1.08 1.16.12 2.56.18 4.2.18.92 0 1.88-.04 2.88-.12 1-.04 2-.06 3-.06v-7.2h-1.68c-.88 0-1.54-.18-1.98-.54-.4-.4-.6-1.06-.6-1.98V107.8h4.26v-7.26h-4.26V91h-10.8v9.54h-3.6zm35.952-10.38v8.04h10.8v-8.04h-10.8zm0 10.38V133h10.8v-32.46h-10.8zm24.739 16.26c0-1.76.04-3.22.12-4.38.08-1.16.22-2.08.42-2.76.24-.72.56-1.22.96-1.5.4-.28.92-.42 1.56-.42.6 0 1.1.14 1.5.42.4.28.7.78.9 1.5.24.68.4 1.6.48 2.76.08 1.16.12 2.62.12 4.38 0 1.72-.04 3.16-.12 4.32-.08 1.16-.24 2.1-.48 2.82-.2.68-.5 1.16-.9 1.44s-.9.42-1.5.42c-.64 0-1.16-.14-1.56-.42-.4-.28-.72-.76-.96-1.44-.2-.72-.34-1.66-.42-2.82-.08-1.16-.12-2.6-.12-4.32zm6.06-26.64v14.04h-.12c-.56-1.68-1.46-2.84-2.7-3.48-1.2-.68-2.56-1.02-4.08-1.02-1.48 0-2.84.28-4.08.84-1.24.56-2.3 1.48-3.18 2.76-.84 1.28-1.5 2.96-1.98 5.04s-.72 4.66-.72 7.74c0 6.04.72 10.48 2.16 13.32 1.44 2.84 3.96 4.26 7.56 4.26 1.92 0 3.46-.4 4.62-1.2 1.16-.8 2.08-2.1 2.76-3.9h.12V133h10.44V90.16h-10.8zm30.662 21.12v1.44h-5.94v-1.44c0-1.72.2-2.98.6-3.78.44-.8 1.22-1.2 2.34-1.2 1.16 0 1.94.4 2.34 1.2.44.8.66 2.06.66 3.78zm-5.94 7.32h16.02v-3.3c0-2.96-.28-5.42-.84-7.38-.52-2-1.34-3.6-2.46-4.8-1.08-1.24-2.44-2.12-4.08-2.64-1.6-.52-3.48-.78-5.64-.78-2.44 0-4.54.32-6.3.96-1.72.6-3.14 1.58-4.26 2.94-1.12 1.36-1.94 3.12-2.46 5.28s-.78 4.8-.78 7.92c0 3.08.22 5.7.66 7.86.48 2.16 1.26 3.92 2.34 5.28 1.08 1.32 2.5 2.28 4.26 2.88 1.76.56 3.94.84 6.54.84 4.48 0 7.7-1 9.66-3 1.96-2.04 2.98-5.06 3.06-9.06h-9.72c0 2.2-.28 3.7-.84 4.5-.52.76-1.26 1.14-2.22 1.14-.76 0-1.44-.28-2.04-.84-.6-.6-.9-1.78-.9-3.54v-4.26zm18.658-18.06V133h10.8v-21.42c0-1.36.2-2.34.6-2.94.4-.6 1.08-.9 2.04-.9s1.64.3 2.04.9c.4.6.6 1.58.6 2.94V133h10.8v-24.48c0-1.76-.22-3.2-.66-4.32-.44-1.12-1.04-2.02-1.8-2.7-.76-.68-1.66-1.14-2.7-1.38-1-.28-2.1-.42-3.3-.42-3.84 0-6.46 1.6-7.86 4.8h-.12v-3.96h-10.44zm28.742 0v7.26h3.6v17.28c0 1.8.16 3.26.48 4.38.36 1.08.9 1.9 1.62 2.46.76.56 1.72.92 2.88 1.08 1.16.12 2.56.18 4.2.18.92 0 1.88-.04 2.88-.12 1-.04 2-.06 3-.06v-7.2h-1.68c-.88 0-1.54-.18-1.98-.54-.4-.4-.6-1.06-.6-1.98V107.8h4.26v-7.26h-4.26V91h-10.8v9.54h-3.6zm20.756-10.38v8.04h10.8v-8.04h-10.8zm0 10.38V133h10.8v-32.46h-10.8zm12.859 0v7.26h3.6v17.28c0 1.8.16 3.26.48 4.38.36 1.08.9 1.9 1.62 2.46.76.56 1.72.92 2.88 1.08 1.16.12 2.56.18 4.2.18.92 0 1.88-.04 2.88-.12 1-.04 2-.06 3-.06v-7.2h-1.68c-.88 0-1.54-.18-1.98-.54-.4-.4-.6-1.06-.6-1.98V107.8h4.26v-7.26h-4.26V91h-10.8v9.54h-3.6zm21.416 35.04v7.56c.92.08 1.86.14 2.82.18 1 .04 2.08.06 3.24.06 1.44 0 2.72-.14 3.84-.42 1.12-.28 2.1-.78 2.94-1.5.88-.72 1.62-1.7 2.22-2.94.64-1.2 1.2-2.74 1.68-4.62l8.7-33.36h-10.8l-3.12 21.9h-.12l-3.3-21.9h-11.1l8.52 30.6c.12.44.22.86.3 1.26.12.4.18.72.18.96 0 .16-.06.38-.18.66s-.32.54-.6.78c-.28.28-.66.52-1.14.72-.44.2-1 .3-1.68.3-.4 0-.8-.02-1.2-.06-.4-.04-.8-.1-1.2-.18zm23.863-14.46V133h10.08v-11.88h-10.08zM342.968 135.864V153h2.28v-17.136h-2.28zm13.767 11.04c0-.608.064-1.2.192-1.776.128-.576.336-1.088.624-1.536.288-.448.672-.808 1.152-1.08.48-.272 1.064-.408 1.752-.408.704 0 1.304.136 1.8.408.496.256.896.6 1.2 1.032.32.432.552.936.696 1.512.144.56.216 1.144.216 1.752 0 .576-.072 1.144-.216 1.704-.128.56-.344 1.064-.648 1.512-.304.432-.696.784-1.176 1.056s-1.064.408-1.752.408c-.656 0-1.232-.128-1.728-.384-.48-.256-.88-.6-1.2-1.032-.304-.432-.536-.92-.696-1.464-.144-.56-.216-1.128-.216-1.704zm9.6 6.096v-17.136h-2.04v6.384h-.048c-.224-.368-.504-.672-.84-.912-.32-.256-.664-.456-1.032-.6-.368-.16-.736-.272-1.104-.336-.368-.064-.712-.096-1.032-.096-.944 0-1.776.176-2.496.528-.704.336-1.296.8-1.776 1.392-.464.576-.816 1.256-1.056 2.04-.224.784-.336 1.616-.336 2.496 0 .88.12 1.712.36 2.496s.592 1.472 1.056 2.064c.48.592 1.072 1.064 1.776 1.416.72.352 1.56.528 2.52.528.864 0 1.656-.152 2.376-.456.72-.304 1.248-.8 1.584-1.488h.048V153h2.04zm18.255-7.392h-7.128c.032-.48.136-.928.312-1.344.176-.432.416-.808.72-1.128.304-.32.664-.568 1.08-.744.432-.192.912-.288 1.44-.288.512 0 .976.096 1.392.288.432.176.8.424 1.104.744.32.304.568.672.744 1.104.192.432.304.888.336 1.368zm1.967 3.456h-2.015c-.176.816-.544 1.424-1.104 1.824-.544.4-1.248.6-2.112.6-.672 0-1.256-.112-1.752-.336-.496-.224-.904-.52-1.224-.888-.32-.384-.552-.816-.696-1.296-.144-.496-.208-1.016-.192-1.56h9.288c.032-.752-.04-1.544-.216-2.376-.16-.832-.464-1.6-.912-2.304-.432-.704-1.016-1.28-1.752-1.728-.72-.464-1.632-.696-2.736-.696-.848 0-1.632.16-2.352.48-.704.32-1.32.768-1.848 1.344-.512.576-.912 1.256-1.2 2.04-.288.784-.432 1.648-.432 2.592.032.944.168 1.816.408 2.616.256.8.632 1.488 1.128 2.064.496.576 1.104 1.024 1.824 1.344.736.32 1.6.48 2.592.48 1.408 0 2.576-.352 3.504-1.056.928-.704 1.528-1.752 1.799-3.144zm8.807-8.472V153h2.04v-7.008c0-.56.072-1.072.216-1.536.16-.48.392-.896.696-1.248.304-.352.68-.624 1.128-.816.464-.192 1.008-.288 1.632-.288.784 0 1.4.224 1.848.672.448.448.672 1.056.672 1.824v8.4h2.04v-8.16c0-.672-.072-1.28-.216-1.824-.128-.56-.36-1.04-.696-1.44-.336-.4-.776-.712-1.32-.936-.544-.224-1.224-.336-2.04-.336-1.84 0-3.184.752-4.032 2.256h-.048v-1.968h-1.92zm22.668 0v-3.72h-2.04v3.72h-2.112v1.8h2.112v7.896c0 .576.056 1.04.168 1.392.112.352.28.624.504.816.24.192.544.328.912.408.384.064.84.096 1.368.096h1.56v-1.8h-.936c-.32 0-.584-.008-.792-.024-.192-.032-.344-.088-.456-.168-.112-.08-.192-.192-.24-.336-.032-.144-.048-.336-.048-.576v-7.704h2.472v-1.8h-2.472zm13.398-2.232v-2.496h-2.04v2.496h2.04zm-2.04 2.232V153h2.04v-12.408h-2.04zm-84.022 29v-3.72h-2.04v3.72h-2.112v1.8h2.112v7.896c0 .576.056 1.04.168 1.392.112.352.28.624.504.816.24.192.544.328.912.408.384.064.84.096 1.368.096h1.56v-1.8h-.936c-.32 0-.584-.008-.792-.024-.192-.032-.344-.088-.456-.168-.112-.08-.192-.192-.24-.336-.032-.144-.048-.336-.048-.576v-7.704h2.472v-1.8h-2.472zm16.11 14.064c-.24.608-.48 1.12-.72 1.536-.224.416-.48.752-.768 1.008-.272.272-.584.464-.936.576-.336.128-.728.192-1.176.192-.24 0-.48-.016-.72-.048s-.472-.088-.696-.168v-1.872c.176.08.376.144.6.192.24.064.44.096.6.096.416 0 .76-.104 1.032-.312.288-.192.504-.472.648-.84l.84-2.088-4.92-12.336h2.304l3.624 10.152h.048l3.48-10.152h2.16l-5.4 14.064zM316.968 195.864V213h2.28v-17.136h-2.28zm34.467 11.04c0-.608.064-1.2.192-1.776.128-.576.336-1.088.624-1.536.288-.448.672-.808 1.152-1.08.48-.272 1.064-.408 1.752-.408.704 0 1.304.136 1.8.408.496.256.896.6 1.2 1.032.32.432.552.936.696 1.512.144.56.216 1.144.216 1.752 0 .576-.072 1.144-.216 1.704-.128.56-.344 1.064-.648 1.512-.304.432-.696.784-1.176 1.056s-1.064.408-1.752.408c-.656 0-1.232-.128-1.728-.384-.48-.256-.88-.6-1.2-1.032-.304-.432-.536-.92-.696-1.464-.144-.56-.216-1.128-.216-1.704zm9.6 6.096v-17.136h-2.04v6.384h-.048c-.224-.368-.504-.672-.84-.912-.32-.256-.664-.456-1.032-.6-.368-.16-.736-.272-1.104-.336-.368-.064-.712-.096-1.032-.096-.944 0-1.776.176-2.496.528-.704.336-1.296.8-1.776 1.392-.464.576-.816 1.256-1.056 2.04-.224.784-.336 1.616-.336 2.496 0 .88.12 1.712.36 2.496s.592 1.472 1.056 2.064c.48.592 1.072 1.064 1.776 1.416.72.352 1.56.528 2.52.528.864 0 1.656-.152 2.376-.456.72-.304 1.248-.8 1.584-1.488h.048V213h2.04zm38.955-7.392h-7.128c.032-.48.136-.928.312-1.344.176-.432.416-.808.72-1.128.304-.32.664-.568 1.08-.744.432-.192.912-.288 1.44-.288.512 0 .976.096 1.392.288.432.176.8.424 1.104.744.32.304.568.672.744 1.104.192.432.304.888.336 1.368zm1.968 3.456h-2.016c-.176.816-.544 1.424-1.104 1.824-.544.4-1.248.6-2.112.6-.672 0-1.256-.112-1.752-.336-.496-.224-.904-.52-1.224-.888-.32-.384-.552-.816-.696-1.296-.144-.496-.208-1.016-.192-1.56h9.288c.032-.752-.04-1.544-.216-2.376-.16-.832-.464-1.6-.912-2.304-.432-.704-1.016-1.28-1.752-1.728-.72-.464-1.632-.696-2.736-.696-.848 0-1.632.16-2.352.48-.704.32-1.32.768-1.848 1.344-.512.576-.912 1.256-1.2 2.04-.288.784-.432 1.648-.432 2.592.032.944.168 1.816.408 2.616.256.8.632 1.488 1.128 2.064.496.576 1.104 1.024 1.824 1.344.736.32 1.6.48 2.592.48 1.408 0 2.576-.352 3.504-1.056.928-.704 1.528-1.752 1.8-3.144zm29.506-8.472V213h2.04v-7.008c0-.56.072-1.072.216-1.536.16-.48.392-.896.696-1.248.304-.352.68-.624 1.128-.816.464-.192 1.008-.288 1.632-.288.784 0 1.4.224 1.848.672.448.448.672 1.056.672 1.824v8.4h2.04v-8.16c0-.672-.072-1.28-.216-1.824-.128-.56-.36-1.04-.696-1.44-.336-.4-.776-.712-1.32-.936-.544-.224-1.224-.336-2.04-.336-1.84 0-3.184.752-4.032 2.256h-.048v-1.968h-1.92zm43.368 0v-3.72h-2.04v3.72h-2.112v1.8h2.112v7.896c0 .576.056 1.04.168 1.392.112.352.28.624.504.816.24.192.544.328.912.408.384.064.84.096 1.368.096h1.56v-1.8h-.936c-.32 0-.584-.008-.792-.024-.192-.032-.344-.088-.456-.168-.112-.08-.192-.192-.24-.336-.032-.144-.048-.336-.048-.576v-7.704h2.472v-1.8h-2.472zm34.098-2.232v-2.496h-2.04v2.496h2.04zm-2.04 2.232V213h2.04v-12.408h-2.04zm35.233 0v-3.72h-2.04v3.72h-2.112v1.8h2.112v7.896c0 .576.056 1.04.168 1.392.112.352.28.624.504.816.24.192.544.328.912.408.384.064.84.096 1.368.096h1.56v-1.8h-.936c-.32 0-.584-.008-.792-.024-.192-.032-.344-.088-.456-.168-.112-.08-.192-.192-.24-.336-.032-.144-.048-.336-.048-.576v-7.704h2.472v-1.8h-2.472zm36.81 14.064c-.24.608-.48 1.12-.72 1.536-.224.416-.48.752-.768 1.008-.272.272-.584.464-.936.576-.336.128-.728.192-1.176.192-.24 0-.48-.016-.72-.048s-.472-.088-.696-.168v-1.872c.176.08.376.144.6.192.24.064.44.096.6.096.416 0 .76-.104 1.032-.312.288-.192.504-.472.648-.84l.84-2.088-4.92-12.336h2.304l3.624 10.152h.048l3.48-10.152h2.16l-5.4 14.064z" /><path d="M557.136 116.968H540v2.28h17.136v-2.28zm-11.04 13.767c.608 0 1.2.064 1.776.192.576.128 1.088.336 1.536.624.448.288.808.672 1.08 1.152.272.48.408 1.064.408 1.752 0 .704-.136 1.304-.408 1.8-.256.496-.6.896-1.032 1.2-.432.32-.936.552-1.512.696-.56.144-1.144.216-1.752.216-.576 0-1.144-.072-1.704-.216-.56-.128-1.064-.344-1.512-.648-.432-.304-.784-.696-1.056-1.176s-.408-1.064-.408-1.752c0-.656.128-1.232.384-1.728.256-.48.6-.88 1.032-1.2.432-.304.92-.536 1.464-.696.56-.144 1.128-.216 1.704-.216zm-6.096 9.6h17.136v-2.04h-6.384v-.048c.368-.224.672-.504.912-.84.256-.32.456-.664.6-1.032.16-.368.272-.736.336-1.104.064-.368.096-.712.096-1.032 0-.944-.176-1.776-.528-2.496-.336-.704-.8-1.296-1.392-1.776-.576-.464-1.256-.816-2.04-1.056-.784-.224-1.616-.336-2.496-.336-.88 0-1.712.12-2.496.36s-1.472.592-2.064 1.056c-.592.48-1.064 1.072-1.416 1.776-.352.72-.528 1.56-.528 2.52 0 .864.152 1.656.456 2.376.304.72.8 1.248 1.488 1.584v.048H540v2.04zm7.392 18.255v-7.128c.48.032.928.136 1.344.312.432.176.808.416 1.128.72.32.304.568.664.744 1.08.192.432.288.912.288 1.44 0 .512-.096.976-.288 1.392-.176.432-.424.8-.744 1.104-.304.32-.672.568-1.104.744-.432.192-.888.304-1.368.336zm-3.456 1.967v-2.015c-.816-.176-1.424-.544-1.824-1.104-.4-.544-.6-1.248-.6-2.112 0-.672.112-1.256.336-1.752.224-.496.52-.904.888-1.224.384-.32.816-.552 1.296-.696.496-.144 1.016-.208 1.56-.192v9.288c.752.032 1.544-.04 2.376-.216.832-.16 1.6-.464 2.304-.912.704-.432 1.28-1.016 1.728-1.752.464-.72.696-1.632.696-2.736 0-.848-.16-1.632-.48-2.352-.32-.704-.768-1.32-1.344-1.848-.576-.512-1.256-.912-2.04-1.2-.784-.288-1.648-.432-2.592-.432-.944.032-1.816.168-2.616.408-.8.256-1.488.632-2.064 1.128-.576.496-1.024 1.104-1.344 1.824-.32.736-.48 1.6-.48 2.592 0 1.408.352 2.576 1.056 3.504.704.928 1.752 1.528 3.144 1.799zm8.472 8.807H540v2.04h7.008c.56 0 1.072.072 1.536.216.48.16.896.392 1.248.696.352.304.624.68.816 1.128.192.464.288 1.008.288 1.632 0 .784-.224 1.4-.672 1.848-.448.448-1.056.672-1.824.672H540v2.04h8.16c.672 0 1.28-.072 1.824-.216.56-.128 1.04-.36 1.44-.696.4-.336.712-.776.936-1.32.224-.544.336-1.224.336-2.04 0-1.84-.752-3.184-2.256-4.032v-.048h1.968v-1.92zm0 22.668h3.72v-2.04h-3.72v-2.112h-1.8v2.112h-7.896c-.576 0-1.04.056-1.392.168-.352.112-.624.28-.816.504-.192.24-.328.544-.408.912-.064.384-.096.84-.096 1.368v1.56h1.8v-.936c0-.32.008-.584.024-.792.032-.192.088-.344.168-.456.08-.112.192-.192.336-.24.144-.032.336-.048.576-.048h7.704v2.472h1.8v-2.472zm2.232 13.398h2.496v-2.04h-2.496v2.04zm-2.232-2.04H540v2.04h12.408v-2.04zm0 14.533h3.72v-2.04h-3.72v-2.112h-1.8v2.112h-7.896c-.576 0-1.04.056-1.392.168-.352.112-.624.28-.816.504-.192.24-.328.544-.408.912-.064.384-.096.84-.096 1.368v1.56h1.8v-.936c0-.32.008-.584.024-.792.032-.192.088-.344.168-.456.08-.112.192-.192.336-.24.144-.032.336-.048.576-.048h7.704v2.472h1.8v-2.472zm-14.064 16.11c-.608-.24-1.12-.48-1.536-.72-.416-.224-.752-.48-1.008-.768-.272-.272-.464-.584-.576-.936-.128-.336-.192-.728-.192-1.176 0-.24.016-.48.048-.72s.088-.472.168-.696h1.872c-.08.176-.144.376-.192.6-.064.24-.096.44-.096.6 0 .416.104.76.312 1.032.192.288.472.504.84.648l2.088.84 12.336-4.92v2.304l-10.152 3.624v.048l10.152 3.48v2.16l-14.064-5.4zM341 118h194v12H341z" /></svg>
				<p>Sheryl Glubok is a writer, director and story teller. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras mattis consectetur purus sit amet fermentum. Vestibulum id ligula porta felis euismod semper. Curabitur blandit tempus porttitor.</p>
			</div>
		</StyledContainer>
	</StyledAbout>
)

export default About