import React from 'react'

import Button from '../../Button'

import { StyledAboutHero } from './StyledAboutHero'

const AboutHero = () => (
	<StyledAboutHero>
		<svg className="title" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 444 185"><title>Writer. Director. Storyteller.</title><path d="M21.96-6.408L17.136 29.16h-.144L12.96-6.408H0L8.784 45h14.688l4.464-34.56h.144L32.544 45h14.688l8.784-51.408h-12.96l-3.6 35.568h-.144L34.056-6.408H21.96zM68.3511 6.048V45h12.96V23.76c0-2.592.624-4.392 1.872-5.4 1.296-1.008 3.096-1.512 5.4-1.512.528 0 1.056.024 1.584.072.528.048 1.08.12 1.656.216V5.04h-2.088c-1.92 0-3.672.624-5.256 1.872-1.584 1.2-2.736 2.976-3.456 5.328h-.144V6.048h-12.528zM104.32-6.408V3.24h12.96v-9.648h-12.96zm0 12.456V45h12.96V6.048h-12.96zm25.978 0v8.712h4.32v20.736c0 2.16.192 3.912.576 5.256.432 1.296 1.08 2.28 1.944 2.952.912.672 2.064 1.104 3.456 1.296 1.392.144 3.072.216 5.04.216 1.104 0 2.256-.048 3.456-.144 1.2-.048 2.4-.072 3.6-.072v-8.64h-2.016c-1.056 0-1.848-.216-2.376-.648-.48-.48-.72-1.272-.72-2.376V14.76h5.112V6.048h-5.112V-5.4h-12.96V6.048h-4.32zm54.175 12.888v1.728h-7.128v-1.728c0-2.064.24-3.576.72-4.536.528-.96 1.464-1.44 2.808-1.44 1.392 0 2.328.48 2.808 1.44.528.96.792 2.472.792 4.536zm-7.128 8.784h19.224v-3.96c0-3.552-.336-6.504-1.008-8.856-.624-2.4-1.608-4.32-2.952-5.76-1.296-1.488-2.928-2.544-4.896-3.168-1.92-.624-4.176-.936-6.768-.936-2.928 0-5.448.384-7.56 1.152-2.064.72-3.768 1.896-5.112 3.528-1.344 1.632-2.328 3.744-2.952 6.336-.624 2.592-.936 5.76-.936 9.504 0 3.696.264 6.84.792 9.432.576 2.592 1.512 4.704 2.808 6.336 1.296 1.584 3 2.736 5.112 3.456 2.112.672 4.728 1.008 7.848 1.008 5.376 0 9.24-1.2 11.592-3.6 2.352-2.448 3.576-6.072 3.672-10.872h-11.664c0 2.64-.336 4.44-1.008 5.4-.624.912-1.512 1.368-2.664 1.368-.912 0-1.728-.336-2.448-1.008-.72-.72-1.08-2.136-1.08-4.248V27.72zm32.576-21.672V45h12.96V23.76c0-2.592.624-4.392 1.872-5.4 1.296-1.008 3.096-1.512 5.4-1.512.528 0 1.056.024 1.584.072.528.048 1.08.12 1.656.216V5.04h-2.088c-1.92 0-3.672.624-5.256 1.872-1.584 1.2-2.736 2.976-3.456 5.328h-.144V6.048h-12.528zm29.863 24.696V45h12.096V30.744h-12.096zM118.3 67.592V119h19.441c3.888 0 6.912-.696 9.072-2.088 2.16-1.44 3.768-3.336 4.824-5.688 1.104-2.4 1.776-5.136 2.016-8.208.24-3.12.36-6.36.36-9.72 0-3.36-.12-6.576-.36-9.648-.24-3.12-.912-5.856-2.016-8.208-1.056-2.4-2.664-4.296-4.824-5.688-2.16-1.44-5.184-2.16-9.072-2.16H118.3zm13.392 41.76V77.24h2.665c1.296 0 2.327.192 3.095.576.768.336 1.345 1.08 1.729 2.232.432 1.152.696 2.784.792 4.896.144 2.112.216 4.896.216 8.352 0 3.456-.072 6.24-.216 8.352-.096 2.112-.36 3.744-.792 4.896-.384 1.152-.961 1.92-1.729 2.304-.768.336-1.799.504-3.095.504h-2.665zm37.672-41.76v9.648h12.96v-9.648h-12.96zm0 12.456V119h12.96V80.048h-12.96zm28.067 0V119h12.96V97.76c0-2.592.624-4.392 1.872-5.4 1.296-1.008 3.096-1.512 5.4-1.512.528 0 1.056.024 1.584.072.528.048 1.08.12 1.656.216V79.04h-2.088c-1.92 0-3.672.624-5.256 1.872-1.584 1.2-2.736 2.976-3.456 5.328h-.144v-6.192h-12.528zm54.688 12.888v1.728h-7.128v-1.728c0-2.064.24-3.576.72-4.536.528-.96 1.464-1.44 2.808-1.44 1.392 0 2.328.48 2.808 1.44.528.96.792 2.472.792 4.536zm-7.128 8.784h19.224v-3.96c0-3.552-.336-6.504-1.008-8.856-.624-2.4-1.608-4.32-2.952-5.76-1.296-1.488-2.928-2.544-4.896-3.168-1.92-.624-4.176-.936-6.768-.936-2.928 0-5.448.384-7.56 1.152-2.064.72-3.768 1.896-5.112 3.528-1.344 1.632-2.328 3.744-2.952 6.336-.624 2.592-.936 5.76-.936 9.504 0 3.696.264 6.84.792 9.432.576 2.592 1.512 4.704 2.808 6.336 1.296 1.584 3 2.736 5.112 3.456 2.112.672 4.728 1.008 7.848 1.008 5.376 0 9.24-1.2 11.592-3.6 2.352-2.448 3.576-6.072 3.672-10.872h-11.664c0 2.64-.336 4.44-1.008 5.4-.624.912-1.512 1.368-2.664 1.368-.912 0-1.728-.336-2.448-1.008-.72-.72-1.08-2.136-1.08-4.248v-5.112zm52.304-6.408h11.664c0-2.448-.24-4.656-.72-6.624-.432-2.016-1.224-3.72-2.376-5.112-1.104-1.44-2.616-2.544-4.536-3.312-1.872-.816-4.248-1.224-7.128-1.224-2.448 0-4.728.24-6.84.72s-3.96 1.464-5.544 2.952c-1.536 1.488-2.76 3.624-3.672 6.408-.912 2.784-1.368 6.48-1.368 11.088 0 4.224.408 7.632 1.224 10.224.816 2.544 1.944 4.536 3.384 5.976 1.488 1.392 3.264 2.304 5.328 2.736 2.064.432 4.344.648 6.84.648 5.52 0 9.504-1.296 11.952-3.888 1.248-1.392 2.136-3.168 2.664-5.328s.792-4.776.792-7.848h-11.664v2.52c0 2.448-.336 4.128-1.008 5.04-.624.912-1.536 1.368-2.736 1.368-.72 0-1.344-.168-1.872-.504-.48-.384-.864-1.032-1.152-1.944-.288-.912-.504-2.136-.648-3.672-.096-1.584-.144-3.576-.144-5.976s.048-4.368.144-5.904c.144-1.584.36-2.832.648-3.744.288-.96.672-1.608 1.152-1.944.528-.384 1.152-.576 1.872-.576 1.392 0 2.352.552 2.88 1.656.288.624.504 1.44.648 2.448.144.96.216 2.232.216 3.816zm22.928-15.264v8.712h4.32v20.736c0 2.16.192 3.912.576 5.256.432 1.296 1.08 2.28 1.944 2.952.912.672 2.064 1.104 3.456 1.296 1.392.144 3.072.216 5.04.216 1.104 0 2.256-.048 3.456-.144 1.2-.048 2.4-.072 3.6-.072v-8.64h-2.016c-1.056 0-1.848-.216-2.376-.648-.48-.48-.72-1.272-.72-2.376V88.76h5.112v-8.712h-5.112V68.6h-12.96v11.448h-4.32zM367.27 99.56c0-2.448.048-4.464.144-6.048.096-1.584.288-2.832.576-3.744.288-.912.648-1.536 1.08-1.872.48-.336 1.08-.504 1.8-.504s1.32.168 1.8.504c.48.336.84.96 1.08 1.872.288.912.48 2.16.576 3.744.096 1.584.144 3.6.144 6.048s-.048 4.464-.144 6.048c-.096 1.536-.288 2.76-.576 3.672-.24.912-.6 1.536-1.08 1.872-.48.336-1.08.504-1.8.504s-1.32-.168-1.8-.504c-.432-.336-.792-.96-1.08-1.872-.288-.912-.48-2.136-.576-3.672-.096-1.584-.144-3.6-.144-6.048zm20.16 0c0-2.832-.168-5.472-.504-7.92-.288-2.496-.984-4.68-2.088-6.552-1.104-1.872-2.76-3.336-4.968-4.392-2.208-1.104-5.208-1.656-9-1.656-3.648 0-6.576.6-8.784 1.8-2.16 1.152-3.816 2.688-4.968 4.608-1.152 1.92-1.92 4.104-2.304 6.552-.336 2.448-.504 4.944-.504 7.488 0 2.832.144 5.496.432 7.992.336 2.448 1.056 4.608 2.16 6.48 1.104 1.824 2.76 3.264 4.968 4.32 2.208 1.008 5.208 1.512 9 1.512 3.648 0 6.552-.552 8.712-1.656 2.208-1.152 3.888-2.664 5.04-4.536 1.152-1.92 1.896-4.104 2.232-6.552.384-2.448.576-4.944.576-7.488zm13.752-19.512V119h12.96V97.76c0-2.592.624-4.392 1.872-5.4 1.296-1.008 3.096-1.512 5.4-1.512.528 0 1.056.024 1.584.072.528.048 1.08.12 1.656.216V79.04h-2.088c-1.92 0-3.672.624-5.256 1.872-1.584 1.2-2.736 2.976-3.456 5.328h-.144v-6.192h-12.528zm29.863 24.696V119h12.096v-14.256h-12.096zm-407.861 51.68h12.528c0-5.52-1.32-9.528-3.96-12.024-2.592-2.544-6.816-3.816-12.672-3.816-5.664 0-9.888 1.368-12.672 4.104-2.784 2.736-4.176 6.72-4.176 11.952 0 3.024.504 5.472 1.512 7.344 1.056 1.872 2.352 3.384 3.888 4.536 1.584 1.152 3.288 2.088 5.112 2.808 1.824.72 3.504 1.44 5.04 2.16 1.584.672 2.88 1.512 3.888 2.52 1.056.96 1.584 2.28 1.584 3.96 0 1.392-.384 2.568-1.152 3.528-.72.96-1.776 1.44-3.168 1.44-1.296 0-2.352-.432-3.168-1.296-.816-.912-1.224-2.472-1.224-4.68v-1.224H1.584v1.8c0 2.688.384 4.944 1.152 6.768.768 1.824 1.872 3.312 3.312 4.464 1.488 1.104 3.288 1.872 5.4 2.304 2.16.48 4.632.72 7.416.72 5.904 0 10.416-1.224 13.536-3.672 3.12-2.496 4.68-6.48 4.68-11.952 0-3.12-.552-5.64-1.656-7.56-1.056-1.968-2.4-3.552-4.032-4.752-1.632-1.2-3.384-2.16-5.256-2.88-1.872-.768-3.624-1.512-5.256-2.232-1.632-.72-3-1.56-4.104-2.52-1.056-1.008-1.584-2.352-1.584-4.032 0-1.152.336-2.184 1.008-3.096.672-.96 1.728-1.44 3.168-1.44 1.296 0 2.256.552 2.88 1.656.624 1.056.936 2.352.936 3.888v1.224zm25.7119-2.376v8.712h4.32v20.736c0 2.16.192 3.912.576 5.256.432 1.296 1.08 2.28 1.944 2.952.912.672 2.064 1.104 3.456 1.296 1.392.144 3.072.216 5.04.216 1.104 0 2.256-.048 3.456-.144 1.2-.048 2.4-.072 3.6-.072v-8.64h-2.016c-1.056 0-1.848-.216-2.376-.648-.48-.48-.72-1.272-.72-2.376V162.76h5.112v-8.712h-5.112V142.6h-12.96v11.448h-4.32zm47.0469 19.512c0-2.448.048-4.464.144-6.048.096-1.584.288-2.832.576-3.744.288-.912.648-1.536 1.08-1.872.48-.336 1.08-.504 1.8-.504.7202 0 1.3202.168 1.8002.504.48.336.84.96 1.08 1.872.288.912.48 2.16.576 3.744.096 1.584.144 3.6.144 6.048s-.048 4.464-.144 6.048c-.096 1.536-.288 2.76-.576 3.672-.24.912-.6 1.536-1.08 1.872-.48.336-1.08.504-1.8002.504-.72 0-1.32-.168-1.8-.504-.432-.336-.792-.96-1.08-1.872-.288-.912-.48-2.136-.576-3.672-.096-1.584-.144-3.6-.144-6.048zm20.1602 0c0-2.832-.168-5.472-.504-7.92-.288-2.496-.984-4.68-2.088-6.552-1.104-1.872-2.76-3.336-4.968-4.392-2.208-1.104-5.208-1.656-9.0002-1.656-3.648 0-6.576.6-8.784 1.8-2.16 1.152-3.816 2.688-4.968 4.608-1.152 1.92-1.92 4.104-2.304 6.552-.336 2.448-.504 4.944-.504 7.488 0 2.832.144 5.496.432 7.992.336 2.448 1.056 4.608 2.16 6.48 1.104 1.824 2.76 3.264 4.968 4.32 2.208 1.008 5.208 1.512 9 1.512 3.6482 0 6.5522-.552 8.7122-1.656 2.208-1.152 3.888-2.664 5.04-4.536 1.152-1.92 1.896-4.104 2.232-6.552.384-2.448.576-4.944.576-7.488zm13.752-19.512V193h12.96v-21.24c0-2.592.624-4.392 1.872-5.4 1.296-1.008 3.096-1.512 5.4-1.512.528 0 1.056.024 1.584.072.528.048 1.08.12 1.656.216V153.04h-2.088c-1.92 0-3.672.624-5.256 1.872-1.584 1.2-2.736 2.976-3.456 5.328h-.144v-6.192h-12.528zm38.026 42.048v9.072c1.104.096 2.232.168 3.384.216 1.2.048 2.496.072 3.888.072 1.728 0 3.264-.168 4.608-.504 1.344-.336 2.52-.936 3.528-1.8 1.056-.864 1.944-2.04 2.664-3.528.768-1.44 1.44-3.288 2.016-5.544l10.44-40.032h-12.96l-3.744 26.28h-.144l-3.96-26.28h-13.32l10.224 36.72c.144.528.264 1.032.36 1.512.144.48.216.864.216 1.152 0 .192-.072.456-.216.792-.144.336-.384.648-.72.936-.336.336-.792.624-1.368.864-.528.24-1.2.36-2.016.36-.48 0-.96-.024-1.44-.072-.48-.048-.96-.12-1.44-.216zm39.952-42.048v8.712h4.32v20.736c0 2.16.192 3.912.576 5.256.432 1.296 1.08 2.28 1.944 2.952.912.672 2.064 1.104 3.456 1.296 1.392.144 3.072.216 5.04.216 1.104 0 2.256-.048 3.456-.144 1.2-.048 2.4-.072 3.6-.072v-8.64h-2.016c-1.056 0-1.848-.216-2.376-.648-.48-.48-.72-1.272-.72-2.376V162.76h5.112v-8.712h-5.112V142.6h-12.96v11.448h-4.32zm54.175 12.888v1.728h-7.128v-1.728c0-2.064.24-3.576.72-4.536.528-.96 1.464-1.44 2.808-1.44 1.392 0 2.328.48 2.808 1.44.528.96.792 2.472.792 4.536zm-7.128 8.784h19.224v-3.96c0-3.552-.336-6.504-1.008-8.856-.624-2.4-1.608-4.32-2.952-5.76-1.296-1.488-2.928-2.544-4.896-3.168-1.92-.624-4.176-.936-6.768-.936-2.928 0-5.448.384-7.56 1.152-2.064.72-3.768 1.896-5.112 3.528-1.344 1.632-2.328 3.744-2.952 6.336-.624 2.592-.936 5.76-.936 9.504 0 3.696.264 6.84.792 9.432.576 2.592 1.512 4.704 2.808 6.336 1.296 1.584 3 2.736 5.112 3.456 2.112.672 4.728 1.008 7.848 1.008 5.376 0 9.24-1.2 11.592-3.6 2.352-2.448 3.576-6.072 3.672-10.872H262.08c0 2.64-.336 4.44-1.008 5.4-.624.912-1.512 1.368-2.664 1.368-.912 0-1.728-.336-2.448-1.008-.72-.72-1.08-2.136-1.08-4.248v-5.112zm33.152-34.128V193h12.96v-51.408h-12.96zm28.643 0V193h12.96v-51.408h-12.96zm47.362 25.344v1.728h-7.128v-1.728c0-2.064.24-3.576.72-4.536.528-.96 1.464-1.44 2.808-1.44 1.392 0 2.328.48 2.808 1.44.528.96.792 2.472.792 4.536zm-7.128 8.784h19.224v-3.96c0-3.552-.336-6.504-1.008-8.856-.624-2.4-1.608-4.32-2.952-5.76-1.296-1.488-2.928-2.544-4.896-3.168-1.92-.624-4.176-.936-6.768-.936-2.928 0-5.448.384-7.56 1.152-2.064.72-3.768 1.896-5.112 3.528-1.344 1.632-2.328 3.744-2.952 6.336-.624 2.592-.936 5.76-.936 9.504 0 3.696.264 6.84.792 9.432.576 2.592 1.512 4.704 2.808 6.336 1.296 1.584 3 2.736 5.112 3.456 2.112.672 4.728 1.008 7.848 1.008 5.376 0 9.24-1.2 11.592-3.6 2.352-2.448 3.576-6.072 3.672-10.872h-11.664c0 2.64-.336 4.44-1.008 5.4-.624.912-1.512 1.368-2.664 1.368-.912 0-1.728-.336-2.448-1.008-.72-.72-1.08-2.136-1.08-4.248v-5.112zm32.576-21.672V193h12.96v-21.24c0-2.592.624-4.392 1.872-5.4 1.296-1.008 3.096-1.512 5.4-1.512.528 0 1.056.024 1.584.072.528.048 1.08.12 1.656.216V153.04h-2.088c-1.92 0-3.672.624-5.256 1.872-1.584 1.2-2.736 2.976-3.456 5.328h-.144v-6.192h-12.528zm29.863 24.696V193h12.096v-14.256h-12.096z"/><path d="M22 98h421v13H22z"/></svg>
		<p className="blurb">Sheryl Glubok is a writer, direcotr and story teller. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras mattis consectetur purus sit amet fermentum. Vestibulum id ligula porta felis euismod semper. Curabitur blandit tempus porttitor.</p>
		<div className="cta">
			<Button to="/contact">Contact Sheryl</Button>
		</div>
		<img src="/about-1.jpg" alt=""/>
		<div className="desc">
			<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 241 203"><title>Entertaining, Visionary, Connection</title><path d="M5 62.616l17.136 6.096v-2.376L7.28 61.392v-.048l14.856-4.896V54L5 60.024v2.592zm14.64 15.83h2.496v-2.04H19.64v2.04zm-2.232-2.04H5v2.04h12.408v-2.04zM8.912 89.3543v-2.04c-.768.032-1.424.192-1.968.48-.528.288-.96.672-1.296 1.152-.32.48-.552 1.032-.696 1.656-.144.624-.216 1.28-.216 1.968 0 .624.064 1.248.192 1.872.112.64.32 1.208.624 1.704.304.512.704.92 1.2 1.224.496.32 1.12.48 1.872.48.592 0 1.088-.12 1.488-.36.4-.224.728-.528.984-.912.272-.368.488-.8.648-1.296.16-.48.296-.976.408-1.488.112-.48.216-.96.312-1.44.112-.48.24-.912.384-1.296.16-.384.352-.704.576-.96.24-.24.536-.36.888-.36.32 0 .576.08.768.24.208.16.368.368.48.624.128.256.216.536.264.84.048.32.072.632.072.936 0 .336-.04.664-.12.984-.064.336-.176.64-.336.912-.16.272-.376.496-.648.672-.256.176-.584.28-.984.312v2.04c.752-.048 1.376-.208 1.872-.48.512-.272.912-.64 1.2-1.104.304-.448.512-.968.624-1.56.128-.592.192-1.24.192-1.944 0-.544-.072-1.096-.216-1.656-.128-.544-.336-1.04-.624-1.488-.272-.432-.632-.792-1.08-1.08-.448-.272-.984-.408-1.608-.408-.8 0-1.424.2-1.872.6-.448.4-.8.896-1.056 1.488-.24.608-.432 1.264-.576 1.968-.128.704-.28 1.352-.456 1.944-.16.608-.376 1.112-.648 1.512-.272.4-.672.6-1.2.6-.384 0-.704-.096-.96-.288-.24-.192-.424-.44-.552-.744-.128-.288-.216-.608-.264-.96-.048-.352-.072-.688-.072-1.008 0-.416.04-.824.12-1.224.08-.384.208-.736.384-1.056.192-.304.44-.552.744-.744.32-.192.704-.296 1.152-.312zM19.64 108.766h2.496v-2.04H19.64v2.04zm-2.232-2.04H5v2.04h12.408v-2.04zm-6.216 13.189c.752 0 1.416.096 1.992.288.592.208 1.088.488 1.488.84.4.352.704.76.912 1.224.208.48.312.984.312 1.512s-.104 1.024-.312 1.488c-.208.48-.512.896-.912 1.248s-.896.624-1.488.816c-.576.208-1.24.312-1.992.312s-1.424-.104-2.016-.312c-.576-.192-1.064-.464-1.464-.816-.384-.352-.68-.768-.888-1.248-.208-.464-.312-.96-.312-1.488s.104-1.032.312-1.512c.208-.464.504-.872.888-1.224.4-.352.888-.632 1.464-.84.592-.192 1.264-.288 2.016-.288zm0-2.16c-.912 0-1.76.128-2.544.384s-1.472.64-2.064 1.152c-.576.512-1.032 1.144-1.368 1.896-.32.752-.48 1.616-.48 2.592 0 .992.16 1.856.48 2.592.336.752.792 1.384 1.368 1.896.592.512 1.28.896 2.064 1.152.784.256 1.632.384 2.544.384.912 0 1.76-.128 2.544-.384.8-.256 1.488-.64 2.064-1.152.592-.512 1.056-1.144 1.392-1.896.336-.736.504-1.6.504-2.592 0-.976-.168-1.84-.504-2.592-.336-.752-.8-1.384-1.392-1.896-.576-.512-1.264-.896-2.064-1.152-.784-.256-1.632-.384-2.544-.384zm6.216 20.953H5v2.04h7.008c.56 0 1.072.072 1.536.216.48.16.896.392 1.248.696.352.304.624.68.816 1.128.192.464.288 1.008.288 1.632 0 .784-.224 1.4-.672 1.848-.448.448-1.056.672-1.824.672H5v2.04h8.16c.672 0 1.28-.072 1.824-.216.56-.128 1.04-.36 1.44-.696.4-.336.712-.776.936-1.32.224-.544.336-1.224.336-2.04 0-1.84-.752-3.184-2.256-4.032v-.048h1.968v-1.92zm-12.36 30.828c-.208-.352-.312-.84-.312-1.464 0-.528.144-.952.432-1.272.304-.304.792-.456 1.464-.456-.672-.56-1.16-1.216-1.464-1.968-.288-.736-.432-1.536-.432-2.4 0-.56.064-1.096.192-1.608.128-.496.328-.928.6-1.296.272-.368.624-.664 1.056-.888.448-.208.984-.312 1.608-.312.704 0 1.28.12 1.728.36.448.24.808.552 1.08.936.288.4.504.848.648 1.344.144.512.264 1.032.36 1.56.112.56.192 1.088.24 1.584.064.512.144.96.24 1.344.112.384.264.688.456.912.208.224.504.336.888.336.448 0 .808-.088 1.08-.264.272-.16.48-.376.624-.648.144-.256.24-.552.288-.888.048-.32.072-.64.072-.96 0-.864-.168-1.584-.504-2.16-.32-.576-.936-.888-1.848-.936v-2.04c.768.032 1.416.192 1.944.48s.952.672 1.272 1.152c.336.48.576 1.024.72 1.632.144.624.216 1.288.216 1.992 0 .56-.04 1.112-.12 1.656-.08.56-.248 1.064-.504 1.512-.24.448-.584.808-1.032 1.08-.448.272-1.032.408-1.752.408H7.904c-.48 0-.832.024-1.056.072-.224.064-.336.256-.336.576 0 .176.04.384.12.624H5.048zm6.36-3.312c-.192-.256-.336-.592-.432-1.008-.08-.416-.152-.856-.216-1.32-.048-.448-.112-.904-.192-1.368-.064-.464-.176-.88-.336-1.248-.16-.368-.392-.672-.696-.912-.288-.224-.688-.336-1.2-.336-.336 0-.624.064-.864.192-.224.144-.408.32-.552.528-.144.224-.248.48-.312.768-.064.288-.096.592-.096.912 0 .672.088 1.248.264 1.728.192.48.424.872.696 1.176.288.304.592.528.912.672.336.144.648.216.936.216h2.088zm6 11.638H5v2.04h5.52c.8 0 1.504.08 2.112.24.624.16 1.152.416 1.584.768.432.352.76.816.984 1.392.224.576.336 1.272.336 2.088h2.16c.032-1.104-.192-2.016-.672-2.736-.48-.72-1.224-1.328-2.232-1.824v-.048h2.616v-1.92zM3.344 197.299c-.608-.24-1.12-.48-1.536-.72-.416-.224-.752-.48-1.008-.768-.272-.272-.464-.584-.576-.936-.128-.336-.192-.728-.192-1.176 0-.24.016-.48.048-.72s.088-.472.168-.696H2.12c-.08.176-.144.376-.192.6-.064.24-.096.44-.096.6 0 .416.104.76.312 1.032.192.288.472.504.84.648l2.088.84 12.336-4.92v2.304l-10.152 3.624v.048l10.152 3.48v2.16l-14.064-5.4zM57.92 87.024h2.28c-.128-.912-.4-1.712-.816-2.4-.416-.704-.936-1.288-1.56-1.752-.624-.464-1.336-.816-2.136-1.056-.8-.24-1.648-.36-2.544-.36-1.312 0-2.48.24-3.504.72-1.008.464-1.856 1.104-2.544 1.92-.672.816-1.184 1.776-1.536 2.88-.352 1.088-.528 2.256-.528 3.504 0 1.248.16 2.416.48 3.504.336 1.088.832 2.032 1.488 2.832.656.8 1.48 1.432 2.472 1.896.992.448 2.152.672 3.48.672 2.192 0 3.92-.6 5.184-1.8 1.264-1.2 2.008-2.88 2.232-5.04h-2.28c-.048.704-.192 1.36-.432 1.968-.24.608-.576 1.136-1.008 1.584-.416.432-.92.776-1.512 1.032-.576.24-1.24.36-1.992.36-1.024 0-1.904-.192-2.64-.576-.736-.384-1.344-.896-1.824-1.536-.464-.656-.808-1.416-1.032-2.28-.224-.88-.336-1.808-.336-2.784 0-.896.112-1.76.336-2.592.224-.832.568-1.568 1.032-2.208.48-.656 1.08-1.176 1.8-1.56.736-.384 1.616-.576 2.64-.576 1.2 0 2.232.304 3.096.912.88.608 1.448 1.52 1.704 2.736zm12.9243 5.784c0-.752.096-1.416.288-1.992.208-.592.488-1.088.84-1.488.352-.4.76-.704 1.224-.912.48-.208.984-.312 1.512-.312s1.024.104 1.488.312c.48.208.896.512 1.248.912s.624.896.816 1.488c.208.576.312 1.24.312 1.992s-.104 1.424-.312 2.016c-.192.576-.464 1.064-.816 1.464-.352.384-.768.68-1.248.888-.464.208-.96.312-1.488.312s-1.032-.104-1.512-.312c-.464-.208-.872-.504-1.224-.888-.352-.4-.632-.888-.84-1.464-.192-.592-.288-1.264-.288-2.016zm-2.16 0c0 .912.128 1.76.384 2.544s.64 1.472 1.152 2.064c.512.576 1.144 1.032 1.896 1.368.752.32 1.616.48 2.592.48.992 0 1.856-.16 2.592-.48.752-.336 1.384-.792 1.896-1.368.512-.592.896-1.28 1.152-2.064.256-.784.384-1.632.384-2.544 0-.912-.128-1.76-.384-2.544-.256-.8-.64-1.488-1.152-2.064-.512-.592-1.144-1.056-1.896-1.392-.736-.336-1.6-.504-2.592-.504-.976 0-1.84.168-2.592.504-.752.336-1.384.8-1.896 1.392-.512.576-.896 1.264-1.152 2.064-.256.784-.384 1.632-.384 2.544zm20.9533-6.216V99h2.04v-7.008c0-.56.072-1.072.216-1.536.16-.48.392-.896.696-1.248.304-.352.68-.624 1.128-.816.464-.192 1.008-.288 1.632-.288.784 0 1.4.224 1.848.672.448.448.672 1.056.672 1.824V99h2.04v-8.16c0-.672-.072-1.28-.216-1.824-.128-.56-.36-1.04-.696-1.44-.336-.4-.776-.712-1.32-.936-.544-.224-1.224-.336-2.04-.336-1.84 0-3.184.752-4.032 2.256h-.048v-1.968h-1.92zm19.8364 0V99h2.04v-7.008c0-.56.072-1.072.216-1.536.16-.48.392-.896.696-1.248.304-.352.68-.624 1.128-.816.464-.192 1.008-.288 1.632-.288.784 0 1.4.224 1.848.672.448.448.672 1.056.672 1.824V99h2.04v-8.16c0-.672-.072-1.28-.216-1.824-.128-.56-.36-1.04-.696-1.44-.336-.4-.776-.712-1.32-.936-.544-.224-1.224-.336-2.04-.336-1.84 0-3.184.752-4.032 2.256h-.048v-1.968h-1.92zm28.451 5.016h-7.128c.032-.48.136-.928.312-1.344.176-.432.416-.808.72-1.128.304-.32.664-.568 1.08-.744.432-.192.912-.288 1.44-.288.512 0 .976.096 1.392.288.432.176.8.424 1.104.744.32.304.568.672.744 1.104.192.432.304.888.336 1.368zm1.968 3.456h-2.016c-.176.816-.544 1.424-1.104 1.824-.544.4-1.248.6-2.112.6-.672 0-1.256-.112-1.752-.336-.496-.224-.904-.52-1.224-.888-.32-.384-.552-.816-.696-1.296-.144-.496-.208-1.016-.192-1.56h9.288c.032-.752-.04-1.544-.216-2.376-.16-.832-.464-1.6-.912-2.304-.432-.704-1.016-1.28-1.752-1.728-.72-.464-1.632-.696-2.736-.696-.848 0-1.632.16-2.352.48-.704.32-1.32.768-1.848 1.344-.512.576-.912 1.256-1.2 2.04-.288.784-.432 1.648-.432 2.592.032.944.168 1.816.408 2.616.256.8.632 1.488 1.128 2.064.496.576 1.104 1.024 1.824 1.344.736.32 1.6.48 2.592.48 1.408 0 2.576-.352 3.504-1.056.928-.704 1.528-1.752 1.8-3.144zm17.231-4.488h2.112c-.08-.736-.272-1.368-.576-1.896-.304-.544-.696-.992-1.176-1.344-.464-.352-1.008-.608-1.632-.768-.608-.176-1.264-.264-1.968-.264-.976 0-1.832.176-2.568.528-.736.336-1.352.808-1.848 1.416-.48.592-.84 1.296-1.08 2.112-.24.8-.36 1.664-.36 2.592 0 .928.12 1.784.36 2.568.256.768.624 1.432 1.104 1.992.496.56 1.104.992 1.824 1.296.736.304 1.576.456 2.52.456 1.584 0 2.832-.416 3.744-1.248.928-.832 1.504-2.016 1.728-3.552h-2.088c-.128.96-.48 1.704-1.056 2.232-.56.528-1.344.792-2.352.792-.64 0-1.192-.128-1.656-.384-.464-.256-.84-.592-1.128-1.008-.288-.432-.504-.92-.648-1.464-.128-.544-.192-1.104-.192-1.68 0-.624.064-1.224.192-1.8.128-.592.336-1.112.624-1.56.304-.448.704-.808 1.2-1.08s1.112-.408 1.848-.408c.864 0 1.552.216 2.064.648.512.432.848 1.04 1.008 1.824zm13.799-3.984v-3.72h-2.04v3.72h-2.112v1.8h2.112v7.896c0 .576.056 1.04.168 1.392.112.352.28.624.504.816.24.192.544.328.912.408.384.064.84.096 1.368.096h1.56v-1.8h-.936c-.32 0-.584-.008-.792-.024-.192-.032-.344-.088-.456-.168-.112-.08-.192-.192-.24-.336-.032-.144-.048-.336-.048-.576v-7.704h2.472v-1.8h-2.472zm10.902 4.776v1.92h6.936v-1.92h-6.936zm18.324-7.008v-2.496h-2.04v2.496h2.04zm-2.04 2.232V99h2.04V86.592h-2.04zm13.188 6.216c0-.752.096-1.416.288-1.992.208-.592.488-1.088.84-1.488.352-.4.76-.704 1.224-.912.48-.208.984-.312 1.512-.312s1.024.104 1.488.312c.48.208.896.512 1.248.912s.624.896.816 1.488c.208.576.312 1.24.312 1.992s-.104 1.424-.312 2.016c-.192.576-.464 1.064-.816 1.464-.352.384-.768.68-1.248.888-.464.208-.96.312-1.488.312s-1.032-.104-1.512-.312c-.464-.208-.872-.504-1.224-.888-.352-.4-.632-.888-.84-1.464-.192-.592-.288-1.264-.288-2.016zm-2.16 0c0 .912.128 1.76.384 2.544s.64 1.472 1.152 2.064c.512.576 1.144 1.032 1.896 1.368.752.32 1.616.48 2.592.48.992 0 1.856-.16 2.592-.48.752-.336 1.384-.792 1.896-1.368.512-.592.896-1.28 1.152-2.064.256-.784.384-1.632.384-2.544 0-.912-.128-1.76-.384-2.544-.256-.8-.64-1.488-1.152-2.064-.512-.592-1.144-1.056-1.896-1.392-.736-.336-1.6-.504-2.592-.504-.976 0-1.84.168-2.592.504-.752.336-1.384.8-1.896 1.392-.512.576-.896 1.264-1.152 2.064-.256.784-.384 1.632-.384 2.544zm20.954-6.216V99h2.04v-7.008c0-.56.072-1.072.216-1.536.16-.48.392-.896.696-1.248.304-.352.68-.624 1.128-.816.464-.192 1.008-.288 1.632-.288.784 0 1.4.224 1.848.672.448.448.672 1.056.672 1.824V99h2.04v-8.16c0-.672-.072-1.28-.216-1.824-.128-.56-.36-1.04-.696-1.44-.336-.4-.776-.712-1.32-.936-.544-.224-1.224-.336-2.04-.336-1.84 0-3.184.752-4.032 2.256h-.048v-1.968h-1.92zM1.872.863999V18h11.904v-1.92H4.152v-5.928h8.904v-1.92H4.152V2.784h9.552V.863999H1.872zM22.7079 5.592V18h2.04v-7.008c0-.56.072-1.072.216-1.536.16-.48.392-.896.696-1.248.304-.352.68-.624 1.128-.816.464-.192 1.008-.288 1.632-.288.784 0 1.4.224 1.848.672.448.448.672 1.056.672 1.824V18h2.04V9.84c0-.672-.072-1.28-.216-1.824-.128-.56-.36-1.04-.696-1.44-.336-.4-.776-.712-1.32-.936-.544-.224-1.224-.336-2.04-.336-1.84 0-3.184.752-4.032 2.256h-.048V5.592h-1.92zm22.6679 0v-3.72h-2.04v3.72h-2.112v1.8h2.112v7.896c0 .576.056 1.04.168 1.392.112.352.28.624.504.816.24.192.544.328.912.408.384.064.84.096 1.368.096h1.56v-1.8h-.936c-.32 0-.584-.008-.792-.024-.192-.032-.344-.088-.456-.168-.112-.08-.192-.192-.24-.336-.032-.144-.048-.336-.048-.576V7.392h2.472v-1.8h-2.472zm19.8543 5.016h-7.128c.032-.48.136-.928.312-1.344.176-.432.416-.808.72-1.128.304-.32.664-.568 1.08-.744.432-.192.912-.288 1.44-.288.512 0 .976.096 1.392.288.432.176.8.424 1.104.744.32.304.568.672.744 1.104.192.432.304.888.336 1.368zm1.968 3.456h-2.016c-.176.816-.544 1.424-1.104 1.824-.544.4-1.248.6-2.112.6-.672 0-1.256-.112-1.752-.336-.496-.224-.904-.52-1.224-.888-.32-.384-.552-.816-.696-1.296-.144-.496-.208-1.016-.192-1.56h9.288c.032-.752-.04-1.544-.216-2.376-.16-.832-.464-1.6-.912-2.304-.432-.704-1.016-1.28-1.752-1.728-.72-.464-1.632-.696-2.736-.696-.848 0-1.632.16-2.352.48-.704.32-1.32.768-1.848 1.344-.512.576-.912 1.256-1.2 2.04-.288.784-.432 1.648-.432 2.592.032.944.168 1.816.408 2.616.256.8.632 1.488 1.128 2.064.496.576 1.104 1.024 1.824 1.344.736.32 1.6.48 2.592.48 1.408 0 2.576-.352 3.504-1.056.928-.704 1.528-1.752 1.8-3.144zm8.7347-8.472V18h2.04v-5.52c0-.8.08-1.504.24-2.112.16-.624.416-1.152.768-1.584.352-.432.816-.76 1.392-.984.576-.224 1.272-.336 2.088-.336v-2.16c-1.104-.032-2.016.192-2.736.672-.72.48-1.328 1.224-1.824 2.232h-.048V5.592h-1.92zm17.3961 0v-3.72h-2.04v3.72h-2.112v1.8h2.112v7.896c0 .576.056 1.04.168 1.392.112.352.28.624.504.816.24.192.544.328.912.408.384.064.84.096 1.368.096h1.56v-1.8h-.936c-.32 0-.584-.008-.792-.024-.192-.032-.344-.088-.456-.168-.112-.08-.192-.192-.24-.336-.032-.144-.048-.336-.048-.576V7.392h2.472v-1.8h-2.472zm10.9021 4.776v1.92h6.936v-1.92h-6.936zM52.0671 46.952c-.352.208-.84.312-1.464.312-.528 0-.952-.144-1.272-.432-.304-.304-.456-.792-.456-1.464-.56.672-1.216 1.16-1.968 1.464-.736.288-1.536.432-2.4.432-.56 0-1.096-.064-1.608-.192-.496-.128-.928-.328-1.296-.6-.368-.272-.664-.624-.888-1.056-.208-.448-.312-.984-.312-1.608 0-.704.12-1.28.36-1.728.24-.448.552-.808.936-1.08.4-.288.848-.504 1.344-.648.512-.144 1.032-.264 1.56-.36.56-.112 1.088-.192 1.584-.24.512-.064.96-.144 1.344-.24.384-.112.688-.264.912-.456.224-.208.336-.504.336-.888 0-.448-.088-.808-.264-1.08-.16-.272-.376-.48-.648-.624-.256-.144-.552-.24-.888-.288-.32-.048-.64-.072-.96-.072-.864 0-1.584.168-2.16.504-.576.32-.888.936-.936 1.848h-2.04c.032-.768.192-1.416.48-1.944s.672-.952 1.152-1.272c.48-.336 1.024-.576 1.632-.72.624-.144 1.288-.216 1.992-.216.56 0 1.112.04 1.656.12.56.08 1.064.248 1.512.504.448.24.808.584 1.08 1.032.272.448.408 1.032.408 1.752v6.384c0 .48.024.832.072 1.056.064.224.256.336.576.336.176 0 .384-.04.624-.12v1.584zm-3.312-6.36c-.256.192-.592.336-1.008.432-.416.08-.856.152-1.32.216-.448.048-.904.112-1.368.192-.464.064-.88.176-1.248.336-.368.16-.672.392-.912.696-.224.288-.336.688-.336 1.2 0 .336.064.624.192.864.144.224.32.408.528.552.224.144.48.248.768.312.288.064.592.096.912.096.672 0 1.248-.088 1.728-.264.48-.192.872-.424 1.176-.696.304-.288.528-.592.672-.912.144-.336.216-.648.216-.936v-2.088zm13.8706-8.232v-2.496h-2.04v2.496h2.04zm-2.04 2.232V47h2.04V34.592h-2.04zm11.7003 0V47h2.04v-7.008c0-.56.072-1.072.216-1.536.16-.48.392-.896.696-1.248.304-.352.68-.624 1.128-.816.464-.192 1.008-.288 1.632-.288.784 0 1.4.224 1.848.672.448.448.672 1.056.672 1.824V47h2.04v-8.16c0-.672-.072-1.28-.216-1.824-.128-.56-.36-1.04-.696-1.44-.336-.4-.776-.712-1.32-.936-.544-.224-1.224-.336-2.04-.336-1.84 0-3.184.752-4.032 2.256h-.048v-1.968h-1.92zm21.9959-2.232v-2.496h-2.04v2.496h2.04zm-2.04 2.232V47h2.04V34.592h-2.04zm11.7001 0V47h2.04v-7.008c0-.56.072-1.072.216-1.536.16-.48.392-.896.696-1.248.304-.352.68-.624 1.128-.816.464-.192 1.008-.288 1.632-.288.784 0 1.4.224 1.848.672.448.448.672 1.056.672 1.824V47h2.04v-8.16c0-.672-.072-1.28-.216-1.824-.128-.56-.36-1.04-.696-1.44-.336-.4-.776-.712-1.32-.936-.544-.224-1.224-.336-2.04-.336-1.84 0-3.184.752-4.032 2.256h-.048v-1.968h-1.92zm30.54 11.352V34.592h-1.92v1.776h-.024c-.368-.688-.88-1.2-1.536-1.536-.656-.352-1.376-.528-2.16-.528-1.072 0-1.976.208-2.712.624-.736.4-1.328.92-1.776 1.56-.448.624-.768 1.328-.96 2.112-.192.768-.288 1.52-.288 2.256 0 .848.112 1.656.336 2.424.24.752.592 1.416 1.056 1.992.464.56 1.04 1.008 1.728 1.344.688.336 1.496.504 2.424.504.8 0 1.552-.176 2.256-.528.72-.368 1.256-.936 1.608-1.704h.048v.816c0 .688-.072 1.32-.216 1.896-.128.576-.344 1.064-.648 1.464-.304.416-.688.736-1.152.96-.464.24-1.032.36-1.704.36-.336 0-.688-.04-1.056-.12-.368-.064-.712-.176-1.032-.336-.304-.16-.568-.368-.792-.624-.208-.256-.32-.568-.336-.936h-2.04c.032.672.208 1.24.528 1.704.32.464.72.84 1.2 1.128.496.288 1.04.496 1.632.624.608.128 1.2.192 1.776.192 1.984 0 3.44-.504 4.368-1.512.928-1.008 1.392-2.528 1.392-4.56zm-5.712-.6c-.672 0-1.232-.136-1.68-.408-.448-.288-.808-.656-1.08-1.104-.272-.464-.464-.976-.576-1.536-.112-.56-.168-1.12-.168-1.68 0-.592.064-1.16.192-1.704.144-.544.36-1.024.648-1.44.304-.416.688-.744 1.152-.984.464-.256 1.024-.384 1.68-.384.64 0 1.184.128 1.632.384.448.256.808.6 1.08 1.032.288.416.496.888.624 1.416.128.528.192 1.064.192 1.608 0 .576-.072 1.152-.216 1.728-.128.576-.336 1.096-.624 1.56-.288.448-.672.816-1.152 1.104-.464.272-1.032.408-1.704.408z" /></svg>
		</div>
	</StyledAboutHero>
)

export default AboutHero