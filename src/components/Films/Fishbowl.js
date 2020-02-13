import React from 'react'
import { css } from 'styled-components'

import Film from './Film'

export const FishbowlStyles = css`
	&.fishbowl {
		grid-template-columns: 1fr 1fr 2fr 1fr 1fr;
		grid-template-rows: 3fr 2fr 2fr 1fr;

		& svg {
			grid-column: 1 / span 3;
			grid-row: 2 / span 2;
			position: relative;
			z-index: 1;
		}

		& img:first-of-type {
			grid-column: 3 / span 2;
			grid-row: 1 / span 3;
			position: relative;
			z-index: 0;
		}

		& img:last-of-type {
			grid-column: 3 / -1;
			grid-row: 1 / -1;
			position: relative;
			z-index: -1;
		}
	}
`

const Fishbowl = React.forwardRef( ( props, ref ) => (
	<Film title="Welcome to the Fishbowl" date="2020" director="Sheryl Glubok" slug="fishbowl" color="#000e17" ref={ ref }>
		<svg fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 895 248"><path fill="#000" d="M177 145h718v103H177z"/><path fill="#fff" d="M401 39h407v28H401z"/><path d="M38.125-10.25L29.75 51.5h-.25l-7-61.75H0L15.25 79h25.5l7.75-60h.25l7.75 60H82l15.25-89.25h-22.5L68.5 51.5h-.25l-9.125-61.75h-21zm111.843 44v3h-12.375v-3c0-3.5833.416-6.2083 1.25-7.875.916-1.6667 2.541-2.5 4.875-2.5 2.416 0 4.041.8333 4.875 2.5.916 1.6667 1.375 4.2917 1.375 7.875zM137.593 49h33.375v-6.875c0-6.1667-.584-11.2917-1.75-15.375-1.084-4.1667-2.792-7.5-5.125-10-2.25-2.5833-5.084-4.4167-8.5-5.5-3.334-1.0833-7.25-1.625-11.75-1.625-5.084 0-9.459.6667-13.125 2-3.584 1.25-6.542 3.2917-8.875 6.125-2.334 2.8333-4.042 6.5-5.125 11-1.084 4.5-1.625 10-1.625 16.5 0 6.4167.458 11.875 1.375 16.375 1 4.5 2.625 8.1667 4.875 11 2.25 2.75 5.208 4.75 8.875 6 3.666 1.1667 8.208 1.75 13.625 1.75 9.333 0 16.041-2.0833 20.125-6.25 4.083-4.25 6.208-10.5417 6.375-18.875h-20.25c0 4.5833-.584 7.7083-1.75 9.375-1.084 1.5833-2.625 2.375-4.625 2.375-1.584 0-3-.5833-4.25-1.75-1.25-1.25-1.875-3.7083-1.875-7.375V49zm57.555-59.25V79h22.5v-89.25h-22.5zm82.977 48.125h20.25c0-4.25-.417-8.0833-1.25-11.5-.75-3.5-2.125-6.4583-4.125-8.875-1.917-2.5-4.542-4.4167-7.875-5.75-3.25-1.4167-7.375-2.125-12.375-2.125-4.25 0-8.208.4167-11.875 1.25-3.667.8333-6.875 2.5417-9.625 5.125-2.667 2.5833-4.792 6.2917-6.375 11.125-1.583 4.8333-2.375 11.25-2.375 19.25 0 7.3333.708 13.25 2.125 17.75C246.042 68.5417 248 72 250.5 74.5c2.583 2.4167 5.667 4 9.25 4.75s7.542 1.125 11.875 1.125c9.583 0 16.5-2.25 20.75-6.75 2.167-2.4167 3.708-5.5 4.625-9.25.917-3.75 1.375-8.2917 1.375-13.625h-20.25v4.375c0 4.25-.583 7.1667-1.75 8.75-1.083 1.5833-2.667 2.375-4.75 2.375-1.25 0-2.333-.2917-3.25-.875-.833-.6667-1.5-1.7917-2-3.375s-.875-3.7083-1.125-6.375c-.167-2.75-.25-6.2083-.25-10.375s.083-7.5833.25-10.25c.25-2.75.625-4.9167 1.125-6.5.5-1.6667 1.167-2.7917 2-3.375.917-.6667 2-1 3.25-1 2.417 0 4.083.9583 5 2.875.5 1.0833.875 2.5 1.125 4.25.25 1.6667.375 3.875.375 6.625zm64.556 7.375c0-4.25.083-7.75.25-10.5.166-2.75.5-4.9167 1-6.5.5-1.5833 1.125-2.6667 1.875-3.25.833-.5833 1.875-.875 3.125-.875s2.291.2917 3.125.875c.833.5833 1.458 1.6667 1.875 3.25.5 1.5833.833 3.75 1 6.5.166 2.75.25 6.25.25 10.5s-.084 7.75-.25 10.5c-.167 2.6667-.5 4.7917-1 6.375-.417 1.5833-1.042 2.6667-1.875 3.25-.834.5833-1.875.875-3.125.875s-2.292-.2917-3.125-.875c-.75-.5833-1.375-1.6667-1.875-3.25s-.834-3.7083-1-6.375c-.167-2.75-.25-6.25-.25-10.5zm35 0c0-4.9167-.292-9.5-.875-13.75-.5-4.3333-1.709-8.125-3.625-11.375-1.917-3.25-4.792-5.7917-8.625-7.625-3.834-1.9167-9.042-2.875-15.625-2.875-6.334 0-11.417 1.0417-15.25 3.125-3.75 2-6.625 4.6667-8.625 8-2 3.3333-3.334 7.125-4 11.375-.584 4.25-.875 8.5833-.875 13 0 4.9167.25 9.5417.75 13.875.583 4.25 1.833 8 3.75 11.25 1.916 3.1667 4.791 5.6667 8.625 7.5 3.833 1.75 9.041 2.625 15.625 2.625 6.333 0 11.375-.9583 15.125-2.875 3.833-2 6.75-4.625 8.75-7.875 2-3.3333 3.291-7.125 3.875-11.375.666-4.25 1-8.5833 1-13zm57.375-10.875V79h22.5V34.375c0-2.8333.416-4.875 1.25-6.125.833-1.25 2.25-1.875 4.25-1.875s3.416.625 4.25 1.875c.833 1.25 1.25 3.2917 1.25 6.125V79h22.5V28c0-3.6667-.459-6.6667-1.375-9-.917-2.3333-2.167-4.2083-3.75-5.625-1.584-1.4167-3.459-2.375-5.625-2.875-2.084-.58334-4.375-.875-6.875-.875-3.5 0-6.792.7917-9.875 2.375-3 1.5-5.375 4.1667-7.125 8-1.417-3.5-3.375-6.0833-5.875-7.75-2.417-1.75-5.959-2.625-10.625-2.625-8 0-13.459 3.3333-16.375 10h-.25v-8.25h-21.75V79h22.5V34.375c0-2.8333.416-4.875 1.25-6.125.833-1.25 2.25-1.875 4.25-1.875s3.416.625 4.25 1.875c.833 1.25 1.25 3.2917 1.25 6.125zm114.79-.625v3h-12.375v-3c0-3.5833.416-6.2083 1.25-7.875.916-1.6667 2.541-2.5 4.875-2.5 2.416 0 4.041.8333 4.875 2.5.916 1.6667 1.375 4.2917 1.375 7.875zM537.471 49h33.375v-6.875c0-6.1667-.584-11.2917-1.75-15.375-1.084-4.1667-2.792-7.5-5.125-10-2.25-2.5833-5.084-4.4167-8.5-5.5-3.334-1.0833-7.25-1.625-11.75-1.625-5.084 0-9.459.6667-13.125 2-3.584 1.25-6.542 3.2917-8.875 6.125-2.334 2.8333-4.042 6.5-5.125 11-1.084 4.5-1.625 10-1.625 16.5 0 6.4167.458 11.875 1.375 16.375 1 4.5 2.625 8.1667 4.875 11 2.25 2.75 5.208 4.75 8.875 6 3.666 1.1667 8.208 1.75 13.625 1.75 9.333 0 16.041-2.0833 20.125-6.25 4.083-4.25 6.208-10.5417 6.375-18.875h-20.25c0 4.5833-.584 7.7083-1.75 9.375-1.084 1.5833-2.625 2.375-4.625 2.375-1.584 0-3-.5833-4.25-1.75-1.25-1.25-1.875-3.7083-1.875-7.375V49zm-332.088 68.75V207h23.25v-36.75h27.75V152h-27.75v-15.25h29.625v-19h-52.875zm77.055 0v16.75h22.5v-16.75h-22.5zm0 21.625V207h22.5v-67.625h-22.5zM349.165 186h-19.75c0 7.417 2.042 13 6.125 16.75 4.167 3.75 10.958 5.625 20.375 5.625 4.25 0 8.042-.5 11.375-1.5 3.417-1 6.25-2.5 8.5-4.5 2.333-2 4.125-4.375 5.375-7.125s1.875-5.792 1.875-9.125c0-4.333-.833-7.792-2.5-10.375-1.583-2.667-3.583-4.75-6-6.25-2.417-1.583-5.042-2.792-7.875-3.625-2.75-.833-5.333-1.625-7.75-2.375s-4.458-1.583-6.125-2.5c-1.583-1-2.375-2.458-2.375-4.375 0-1.667.542-2.958 1.625-3.875 1.083-.917 2.458-1.375 4.125-1.375 1.917 0 3.375.542 4.375 1.625 1.083 1 1.625 2.958 1.625 5.875h19.5c0-14.167-8.458-21.25-25.375-21.25-4.583 0-8.583.542-12 1.625-3.333 1.083-6.125 2.583-8.375 4.5-2.167 1.917-3.792 4.167-4.875 6.75-1.083 2.5-1.625 5.25-1.625 8.25 0 4.25.792 7.708 2.375 10.375 1.667 2.583 3.708 4.667 6.125 6.25 2.417 1.583 5 2.833 7.75 3.75 2.833.917 5.458 1.792 7.875 2.625s4.417 1.792 6 2.875c1.667 1.083 2.5 2.625 2.5 4.625 0 1.833-.667 3.25-2 4.25-1.25 1-2.75 1.5-4.5 1.5-2.083 0-3.667-.792-4.75-2.375-.583-.75-1-1.708-1.25-2.875s-.375-2.417-.375-3.75zm57.986-68.25V207h22.5v-44.625c0-2.833.417-4.875 1.25-6.125.834-1.25 2.25-1.875 4.25-1.875s3.417.625 4.25 1.875c.834 1.25 1.25 3.292 1.25 6.125V207h22.5v-51c0-3.5-.5-6.417-1.5-8.75-.916-2.417-2.208-4.333-3.875-5.75-1.583-1.417-3.458-2.417-5.625-3-2.083-.583-4.291-.875-6.625-.875-2.75 0-5.583.667-8.5 2-2.833 1.25-5.208 3.667-7.125 7.25h-.25V117.75h-22.5zm105.317 55.5c0-3.667.083-6.708.25-9.125.166-2.417.458-4.333.875-5.75.5-1.5 1.166-2.542 2-3.125.833-.583 1.875-.875 3.125-.875 1.333 0 2.416.292 3.25.875.833.583 1.458 1.625 1.875 3.125.5 1.417.833 3.333 1 5.75.166 2.417.25 5.458.25 9.125 0 3.583-.084 6.583-.25 9-.167 2.417-.5 4.375-1 5.875-.417 1.417-1.042 2.417-1.875 3-.834.583-1.917.875-3.25.875-1.25 0-2.292-.292-3.125-.875-.834-.583-1.5-1.583-2-3-.417-1.5-.709-3.458-.875-5.875-.167-2.417-.25-5.417-.25-9zm-22.5-55.5V207h21.75v-9.25h.25c1.416 3.75 3.333 6.458 5.75 8.125 2.416 1.667 5.625 2.5 9.625 2.5 7.5 0 12.75-2.958 15.75-8.875s4.5-15.167 4.5-27.75c0-6.5-.5-11.917-1.5-16.25-.917-4.417-2.25-7.917-4-10.5-1.75-2.667-3.917-4.542-6.5-5.625-2.584-1.167-5.5-1.75-8.75-1.75-3.167 0-6.042.708-8.625 2.125-2.5 1.333-4.334 3.75-5.5 7.25h-.25v-29.25h-22.5zm102.566 55.5c0-4.25.084-7.75.25-10.5.167-2.75.5-4.917 1-6.5.5-1.583 1.125-2.667 1.875-3.25.834-.583 1.875-.875 3.125-.875s2.292.292 3.125.875c.834.583 1.459 1.667 1.875 3.25.5 1.583.834 3.75 1 6.5.167 2.75.25 6.25.25 10.5s-.083 7.75-.25 10.5c-.166 2.667-.5 4.792-1 6.375-.416 1.583-1.041 2.667-1.875 3.25-.833.583-1.875.875-3.125.875s-2.291-.292-3.125-.875c-.75-.583-1.375-1.667-1.875-3.25s-.833-3.708-1-6.375c-.166-2.75-.25-6.25-.25-10.5zm35 0c0-4.917-.291-9.5-.875-13.75-.5-4.333-1.708-8.125-3.625-11.375-1.916-3.25-4.791-5.792-8.625-7.625-3.833-1.917-9.041-2.875-15.625-2.875-6.333 0-11.416 1.042-15.25 3.125-3.75 2-6.625 4.667-8.625 8s-3.333 7.125-4 11.375c-.583 4.25-.875 8.583-.875 13 0 4.917.25 9.542.75 13.875.584 4.25 1.834 8 3.75 11.25 1.917 3.167 4.792 5.667 8.625 7.5 3.834 1.75 9.042 2.625 15.625 2.625 6.334 0 11.375-.958 15.125-2.875 3.834-2 6.75-4.625 8.75-7.875 2-3.333 3.292-7.125 3.875-11.375.667-4.25 1-8.583 1-13zm20-33.875L661.284 207h25.5l6.875-47.875h.25L700.784 207h25.5l13.75-67.625h-21.75L712.659 188h-.25l-6.625-48.625h-24L675.159 188h-.25l-5.625-48.625h-21.75zm114.904-21.625V207h22.5v-89.25h-22.5zM153.216 89.76H138v2.28h15.216v5.712h1.92V84.048h-1.92v5.712zm1.92 16.393H138v2.28h7.848v9.024H138v2.28h17.136v-2.28h-7.368v-9.024h7.368v-2.28zm-9.744 32.101v-7.128c.48.032.928.136 1.344.312.432.176.808.416 1.128.72.32.304.568.664.744 1.08.192.432.288.912.288 1.44 0 .512-.096.976-.288 1.392-.176.432-.424.8-.744 1.104-.304.32-.672.568-1.104.744-.432.192-.888.304-1.368.336zm-3.456 1.968v-2.016c-.816-.176-1.424-.544-1.824-1.104-.4-.544-.6-1.248-.6-2.112 0-.672.112-1.256.336-1.752.224-.496.52-.904.888-1.224.384-.32.816-.552 1.296-.696.496-.144 1.016-.208 1.56-.192v9.288c.752.032 1.544-.04 2.376-.216.832-.16 1.6-.464 2.304-.912.704-.432 1.28-1.016 1.728-1.752.464-.72.696-1.632.696-2.736 0-.848-.16-1.632-.48-2.352-.32-.704-.768-1.32-1.344-1.848-.576-.512-1.256-.912-2.04-1.2-.784-.288-1.648-.432-2.592-.432-.944.032-1.816.168-2.616.408-.8.256-1.488.632-2.064 1.128-.576.496-1.024 1.104-1.344 1.824-.32.736-.48 1.6-.48 2.592 0 1.408.352 2.576 1.056 3.504.704.928 1.752 1.528 3.144 1.8z" fill="#fff"/><path d="M769.368 49.592v-3.72h-2.04v3.72h-2.112v1.8h2.112v7.896c0 .576.056 1.04.168 1.392.112.352.28.624.504.816.24.192.544.328.912.408.384.064.84.096 1.368.096h1.56v-1.8h-.936c-.32 0-.584-.008-.792-.024-.192-.032-.344-.088-.456-.168-.112-.08-.192-.192-.24-.336-.032-.144-.048-.336-.048-.576v-7.704h2.472v-1.8h-2.472zm12.726 6.216c0-.752.096-1.416.288-1.992.208-.592.488-1.088.84-1.488.352-.4.76-.704 1.224-.912.48-.208.984-.312 1.512-.312s1.024.104 1.488.312c.48.208.896.512 1.248.912s.624.896.816 1.488c.208.576.312 1.24.312 1.992s-.104 1.424-.312 2.016c-.192.576-.464 1.064-.816 1.464-.352.384-.768.68-1.248.888-.464.208-.96.312-1.488.312s-1.032-.104-1.512-.312c-.464-.208-.872-.504-1.224-.888-.352-.4-.632-.888-.84-1.464-.192-.592-.288-1.264-.288-2.016zm-2.16 0c0 .912.128 1.76.384 2.544s.64 1.472 1.152 2.064c.512.576 1.144 1.032 1.896 1.368.752.32 1.616.48 2.592.48.992 0 1.856-.16 2.592-.48.752-.336 1.384-.792 1.896-1.368.512-.592.896-1.28 1.152-2.064.256-.784.384-1.632.384-2.544 0-.912-.128-1.76-.384-2.544-.256-.8-.64-1.488-1.152-2.064-.512-.592-1.144-1.056-1.896-1.392-.736-.336-1.6-.504-2.592-.504-.976 0-1.84.168-2.592.504-.752.336-1.384.8-1.896 1.392-.512.576-.896 1.264-1.152 2.064-.256.784-.384 1.632-.384 2.544z" fill="#000"/></svg>
		<img itemProp="image" src="/water.jpg" alt="" />
		<img itemProp="image" src="/water-lg.jpg" alt="" />
	</Film>
) )

export default Fishbowl