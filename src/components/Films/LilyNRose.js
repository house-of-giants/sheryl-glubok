import React from 'react'
import { css } from 'styled-components'

import Film from './Film'

export const LilyNRoseStyles = css`
	&.lily-n-rose {
		grid-template-columns: 1fr 1fr 2fr 1fr 1fr;
		grid-template-rows: 1fr 1fr 7fr;

		& svg {
			grid-column: 2 / span 2;
			grid-row: 1 / span 2;
			position: relative;
			z-index: 1;
		}

		& img {
			grid-column: 1 / span 5;
			grid-row: 1 / span 4;
		}
	}
`

const LilyNRose = () => (
	<Film title="Lily 'N' Rose" date="2018" director="Sheryl Glubok" slug="lily-n-rose" color="#3b2c1c">
		<svg fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 907 179"><g clipPath="url(#clip0)" fill="#fff"><path fillRule="evenodd" clipRule="evenodd" d="M52.375 89.25v-19H23.75V0H.5v89.25h51.875zm45.875 0V0H75v89.25h23.25zm79.5-19v19h-51.875V0h23.25v70.25h28.625zm50.625 19V54.125L251.125 0h-25.5l-8.75 31.125h-.25L207.875 0H182.75l22.375 54.125V89.25h23.25zM370 36v46.75h-17.5V36H370zm52.25 89.25V70.125h.25L438 125.25h25.5V36h-21.75v55h-.25l-15-55h-26v89.25h21.75zM511.5 36v46.75H494V36h17.5zm103.75 89.25V89.5h6.125c1.417 0 2.604.1875 3.563.5625.958.375 1.75 1.0417 2.374 2 .626.9583 1.063 2.2708 1.313 3.9375s.375 3.75.375 6.25v6c0 .917.021 2.104.062 3.562.042 1.459.126 2.98.25 4.563.126 1.583.334 3.167.626 4.75.291 1.583.729 2.958 1.312 4.125H656V124c-.75-.417-1.292-.854-1.625-1.312-.333-.459-.667-.938-1-1.438-.25-.5-.458-1.208-.625-2.125-.167-.917-.292-1.937-.375-3.063-.083-1.124-.125-2.312-.125-3.562v-11.25c0-6-1.042-10.7083-3.125-14.125-2.083-3.4167-5.917-5.375-11.5-5.875V81c5.333-.8333 9.208-3.0833 11.625-6.75s3.625-8.5 3.625-14.5c0-3.4167-.437-6.5833-1.313-9.5-.874-2.9167-2.291-5.4375-4.25-7.5625-1.958-2.125-4.5-3.7708-7.624-4.9375-3.126-1.1667-6.896-1.75-11.313-1.75H592v89.25h23.25zm0-51.5h4.625c3.333 0 5.792-.9792 7.375-2.9375 1.583-1.9583 2.375-4.5208 2.375-7.6875 0-3.75-.771-6.4167-2.313-8-1.541-1.5833-4.062-2.375-7.562-2.375h-4.5v21zm95.25 52.875c5.917 0 10.917-.792 15-2.375s7.375-4.229 9.875-7.938c2.5-3.708 4.292-8.5 5.375-14.374 1.083-5.8755 1.625-12.9797 1.625-21.313s-.542-15.4375-1.625-21.3125-2.875-10.6667-5.375-14.375c-2.5-3.7083-5.792-6.4167-9.875-8.125-4.083-1.7083-9.083-2.5625-15-2.5625s-10.917.8542-15 2.5625-7.375 4.4167-9.875 8.125c-2.5 3.7083-4.292 8.5-5.375 14.375-1.083 5.875-1.625 12.9792-1.625 21.3125s.542 15.4375 1.625 21.313c1.083 5.874 2.875 10.666 5.375 14.374 2.5 3.709 5.792 6.355 9.875 7.938 4.083 1.583 9.083 2.375 15 2.375zm-4.188-16.75c1.042.917 2.438 1.375 4.188 1.375 1.75 0 3.146-.458 4.188-1.375 1.041-.917 1.833-2.542 2.374-4.875.542-2.333.896-5.4792 1.063-9.4375.167-3.9583.25-8.9375.25-14.9375s-.083-10.9792-.25-14.9375c-.167-3.9583-.521-7.1042-1.063-9.4375-.541-2.3333-1.333-3.9583-2.374-4.875C713.646 50.4583 712.25 50 710.5 50c-1.75 0-3.146.4583-4.188 1.375-1.041.9167-1.833 2.5417-2.374 4.875-.542 2.3333-.896 5.4792-1.063 9.4375-.167 3.9583-.25 8.9375-.25 14.9375v.7768c.007 5.6542.091 10.3745.25 14.1607.167 3.9583.521 7.1045 1.063 9.4375.541 2.333 1.333 3.958 2.374 4.875zm89.188 16.75c10.25 0 18.083-2.146 23.5-6.437 5.417-4.292 8.125-11.188 8.125-20.688 0-5.4167-.937-9.8125-2.813-13.1875-1.874-3.375-4.229-6.1042-7.062-8.1875-2.833-2.0833-5.875-3.7708-9.125-5.0625S801.833 70.5 799 69.25s-5.188-2.7292-7.062-4.4375c-1.876-1.7083-2.813-4.0208-2.813-6.9375 0-2 .583-3.8125 1.75-5.4375s3-2.4375 5.5-2.4375c2.25 0 3.917.9375 5 2.8125 1.083 1.875 1.625 4.1458 1.625 6.8125v2.125h21.75c0-9.5833-2.271-16.5625-6.812-20.9375-4.542-4.375-11.896-6.5625-22.063-6.5625-9.833 0-17.167 2.375-22 7.125-4.833 4.75-7.25 11.6667-7.25 20.75 0 5.25.896 9.5 2.687 12.75 1.792 3.25 4.042 5.875 6.75 7.875 2.709 2 5.646 3.625 8.813 4.875 3.167 1.25 6.104 2.4792 8.813 3.6875 2.708 1.2083 4.958 2.6667 6.75 4.375 1.791 1.7083 2.687 4.0208 2.687 6.9375 0 2.417-.646 4.458-1.937 6.125-1.292 1.667-3.146 2.5-5.563 2.5-2.25 0-4.083-.771-5.5-2.312-1.417-1.542-2.125-4.23-2.125-8.063V98.75h-22.5v3.125c0 4.667.667 8.583 2 11.75s3.271 5.729 5.812 7.687c2.542 1.959 5.667 3.334 9.376 4.126 3.708.791 7.979 1.187 12.812 1.187zm111.375-20.375v19h-54V36h52.875v19h-29.625v15.25h27.75V88.5h-27.75v17.75h30.75z"/><path d="M188.136 67.122H171v11.352h1.92v-9.072h15.216v-2.28zm-2.496 21.6599h2.496v-2.04h-2.496v2.04zm-2.232-2.04H171v2.04h12.408v-2.04zm4.728 11.8204H171v2.0397h17.136v-2.0397zm-18.792 16.5727c-.608-.24-1.12-.48-1.536-.72-.416-.224-.752-.48-1.008-.768-.272-.272-.464-.584-.576-.936-.128-.336-.192-.728-.192-1.176 0-.24.016-.48.048-.72s.088-.472.168-.696h1.872c-.08.176-.144.376-.192.6-.064.24-.096.44-.096.6 0 .416.104.76.312 1.032.192.288.472.504.84.648l2.088.84 12.336-4.92v2.304l-10.152 3.624v.048l10.152 3.48v2.16l-14.064-5.4zM202.492 128.614v2.664h1.416c0 .272-.024.552-.072.84-.032.272-.104.52-.216.744-.112.224-.256.408-.432.552-.176.128-.4.192-.672.192v1.2c.464 0 .856-.096 1.176-.288.336-.192.608-.448.816-.768.224-.32.384-.688.48-1.104.112-.432.168-.888.168-1.368v-2.664h-2.664zm13.036 0v17.136h2.16v-13.752h.048l8.952 13.752h2.496v-17.136h-2.16v13.896h-.048l-9.024-13.896h-2.424zm23.964 0v2.664h1.416c0 .272-.024.552-.072.84-.032.272-.104.52-.216.744-.112.224-.256.408-.432.552-.176.128-.4.192-.672.192v1.2c.464 0 .856-.096 1.176-.288.336-.192.608-.448.816-.768.224-.32.384-.688.48-1.104.112-.432.168-.888.168-1.368v-2.664h-2.664zM276.872 128.614v17.136h2.28v-7.32h5.568c.56 0 1.008.088 1.344.264.336.16.608.384.816.672.208.272.36.6.456.984.096.368.176.76.24 1.176.08.416.128.84.144 1.272.016.432.032.84.048 1.224.016.368.048.704.096 1.008.064.304.176.544.336.72h2.544c-.24-.288-.424-.616-.552-.984-.112-.384-.2-.784-.264-1.2-.064-.416-.104-.84-.12-1.272-.016-.432-.04-.856-.072-1.272-.048-.416-.12-.816-.216-1.2-.08-.384-.216-.728-.408-1.032-.176-.32-.424-.592-.744-.816-.304-.224-.704-.384-1.2-.48v-.048c1.04-.288 1.792-.824 2.256-1.608.48-.784.72-1.696.72-2.736 0-1.392-.464-2.488-1.392-3.288-.912-.8-2.184-1.2-3.816-1.2h-8.064zm7.032 7.896h-4.752v-5.976h5.664c1.072 0 1.848.272 2.328.816.48.544.72 1.248.72 2.112 0 .624-.112 1.136-.336 1.536-.208.384-.496.696-.864.936-.352.224-.768.376-1.248.456-.48.08-.984.12-1.512.12zm17.05 3.048c0-.752.096-1.416.288-1.992.208-.592.488-1.088.84-1.488.352-.4.76-.704 1.224-.912.48-.208.984-.312 1.512-.312s1.024.104 1.488.312c.48.208.896.512 1.248.912s.624.896.816 1.488c.208.576.312 1.24.312 1.992s-.104 1.424-.312 2.016c-.192.576-.464 1.064-.816 1.464-.352.384-.768.68-1.248.888-.464.208-.96.312-1.488.312s-1.032-.104-1.512-.312c-.464-.208-.872-.504-1.224-.888-.352-.4-.632-.888-.84-1.464-.192-.592-.288-1.264-.288-2.016zm-2.16 0c0 .912.128 1.76.384 2.544s.64 1.472 1.152 2.064c.512.576 1.144 1.032 1.896 1.368.752.32 1.616.48 2.592.48.992 0 1.856-.16 2.592-.48.752-.336 1.384-.792 1.896-1.368.512-.592.896-1.28 1.152-2.064.256-.784.384-1.632.384-2.544 0-.912-.128-1.76-.384-2.544-.256-.8-.64-1.488-1.152-2.064-.512-.592-1.144-1.056-1.896-1.392-.736-.336-1.6-.504-2.592-.504-.976 0-1.84.168-2.592.504-.752.336-1.384.8-1.896 1.392-.512.576-.896 1.264-1.152 2.064-.256.784-.384 1.632-.384 2.544zm18.529 31.28h-2.04c.032.768.192 1.424.48 1.968.288.528.672.96 1.152 1.296.48.32 1.032.552 1.656.696.624.144 1.28.216 1.968.216.624 0 1.248-.064 1.872-.192.64-.112 1.208-.32 1.704-.624.512-.304.92-.704 1.224-1.2.32-.496.48-1.12.48-1.872 0-.592-.12-1.088-.36-1.488-.224-.4-.528-.728-.912-.984-.368-.272-.8-.488-1.296-.648-.48-.16-.976-.296-1.488-.408-.48-.112-.96-.216-1.44-.312-.48-.112-.912-.24-1.296-.384-.384-.16-.704-.352-.96-.576-.24-.24-.36-.536-.36-.888 0-.32.08-.576.24-.768.16-.208.368-.368.624-.48.256-.128.536-.216.84-.264.32-.048.632-.072.936-.072.336 0 .664.04.984.12.336.064.64.176.912.336.272.16.496.376.672.648.176.256.28.584.312.984h2.04c-.048-.752-.208-1.376-.48-1.872-.272-.512-.64-.912-1.104-1.2-.448-.304-.968-.512-1.56-.624-.592-.128-1.24-.192-1.944-.192-.544 0-1.096.072-1.656.216-.544.128-1.04.336-1.488.624-.432.272-.792.632-1.08 1.08-.272.448-.408.984-.408 1.608 0 .8.2 1.424.6 1.872.4.448.896.8 1.488 1.056.608.24 1.264.432 1.968.576.704.128 1.352.28 1.944.456.608.16 1.112.376 1.512.648.4.272.6.672.6 1.2 0 .384-.096.704-.288.96-.192.24-.44.424-.744.552-.288.128-.608.216-.96.264-.352.048-.688.072-1.008.072-.416 0-.824-.04-1.224-.12-.384-.08-.736-.208-1.056-.384-.304-.192-.552-.44-.744-.744-.192-.32-.296-.704-.312-1.152zm25.868-3.48h-7.128c.032-.48.136-.928.312-1.344.176-.432.416-.808.72-1.128.304-.32.664-.568 1.08-.744.432-.192.912-.288 1.44-.288.512 0 .976.096 1.392.288.432.176.8.424 1.104.744.32.304.568.672.744 1.104.192.432.304.888.336 1.368zm1.968 3.456h-2.016c-.176.816-.544 1.424-1.104 1.824-.544.4-1.248.6-2.112.6-.672 0-1.256-.112-1.752-.336-.496-.224-.904-.52-1.224-.888-.32-.384-.552-.816-.696-1.296-.144-.496-.208-1.016-.192-1.56h9.288c.032-.752-.04-1.544-.216-2.376-.16-.832-.464-1.6-.912-2.304-.432-.704-1.016-1.28-1.752-1.728-.72-.464-1.632-.696-2.736-.696-.848 0-1.632.16-2.352.48-.704.32-1.32.768-1.848 1.344-.512.576-.912 1.256-1.2 2.04-.288.784-.432 1.648-.432 2.592.032.944.168 1.816.408 2.616.256.8.632 1.488 1.128 2.064.496.576 1.104 1.024 1.824 1.344.736.32 1.6.48 2.592.48 1.408 0 2.576-.352 3.504-1.056.928-.704 1.528-1.752 1.8-3.144z"/></g><defs><clipPath id="clip0"><path fill="#fff" d="M0 0h907v179H0z"/></clipPath></defs></svg>
		<img itemProp="image" src="/lily-n-rose.jpg" alt="" />
	</Film>
)

export default LilyNRose