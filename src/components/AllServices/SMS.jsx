import React from 'react'
import {
    Accordion,
    AccordionHeader,
    AccordionBody,
} from "@material-tailwind/react";

function SMS() {
    const [open, setOpen] = React.useState(1);
    const handleOpen = (value) => setOpen(open === value ? 0 : value);

    return (
        <div className='flex flex-col items-center md:justify-between mx-4 text-indigo-900'>
            <h3 className='md:text-xl text-lg font-bold mb-5 border-b-[2px] border-red-900'>SMS Solution</h3>
            <div className='text-lg flex flex-col place-items-start text-justify'>
                <p>nformatic Computech Pvt. Ltd. provide bridge to businesses, corporation and executives needs to achieve simple, cost effective and immediate communication to their prospects, customers, employees, colleagues, retailers, suppliers, distributors and friends via Acura Solutions different and direct communication channels.</p>
                <Accordion open={open === 1} className="mb-2 rounded-lg border-b-[2px] border-red-900 px-4">
                    <AccordionHeader
                    onClick={() => handleOpen(1)}
                    className={`border-b-0 transition-colors ${
                    open === 1 ? "text-indigo-700 hover:!text-indigo-900" : ""
                    }`}>
                        Bulk SMS
                    </AccordionHeader>
                    <AccordionBody className="pt-0 text-lg font-light text-indigo-900">
                    Bulk SMS stands for bulk messaging. Bulk SMS is used by companies, enterprises, banks, schools, and small businesses. Bulk SMS is used for sending sms (short message service) to mobile no. Bulk SMS is used as promotional sms for sms marketing. It is also used for various alert sms messages like transaction alert sms from bank, train and bus reservation, and order confirmation from website. You can send sms in bulk such as you can send 1 lac sms in just single click. Bulk SMS is the best way to send sms from the web. Web sms help you to send text sms message to mobile. Bulk SMS is the best way to send sms to mobile. It is also called as web to sms.
                    </AccordionBody>
                </Accordion>
                <Accordion open={open === 2} className="mb-2 rounded-lg border-b-[2px] border-red-900 px-4">
                    <AccordionHeader
                    onClick={() => handleOpen(2)}
                    className={`border-b-0 transition-colors ${
                    open === 2 ? "text-indigo-700 hover:!text-indigo-900" : ""
                    }`}>
                        Short Code SMS
                    </AccordionHeader>
                    <AccordionBody className="pt-0 text-lg font-light text-indigo-900">
                    Short Code SMS Used by advertising agencies, media companies, radio stations, TV channels, marketing companies for campaigns, contests etc. For lead generation, if backed by a campaign in print or electronic media. Advertising agencies prefer to use it as the response to their advertising campaign is measurable on parameters like numbers, time, effectiveness etc.
                    </AccordionBody>
                </Accordion>
                <Accordion open={open === 3} className="mb-2 rounded-lg border-b-[2px] border-red-900 px-4">
                    <AccordionHeader
                    onClick={() => handleOpen(3)}
                    className={`border-b-0 transition-colors ${
                    open === 3 ? "text-indigo-700 hover:!text-indigo-900" : ""
                    }`}>
                        Long Code SMS
                    </AccordionHeader>
                    <AccordionBody className="pt-0 text-lg font-light text-indigo-900">
                    Long Code SMS is used Where SMS number is printed on the advertisement,communication is done internally with in companies employee for information sharing,Day Report submission to head office by employee, Updated price list of company products, Checking stock status Result on request to parents , Integration with any web application.
                    </AccordionBody>
                </Accordion>
                <Accordion open={open === 4} className="mb-2 rounded-lg border-b-[2px] border-red-900 px-4">
                    <AccordionHeader
                    onClick={() => handleOpen(4)}
                    className={`border-b-0 transition-colors ${
                    open === 4 ? "text-indigo-700 hover:!text-indigo-900" : ""
                    }`}>
                        Bulk Voice Call SMS
                    </AccordionHeader>
                    <AccordionBody className="pt-0 text-lg font-light text-indigo-900">
                    Bulk voice calls are prerecorded voice messages to a mobile or landline networks across the country. It is a simple communications technology that blasts a recorded voice message to thousands of call recipients in a very short period of time. Bulk voice calls are automated calls which involves automated dialing to hundreds of numbers at once using computer managed lists, playing a pre-recorded message to automatically dialed mobile or landline numbers. This communication technique of bulk voice calls has the advantage of most penetrative reach and personalized messages. Voice calls are also most cost effective in comparison to the traditional mailers.
                    </AccordionBody>
                </Accordion>
            </div>
        </div>
    )
}

export default SMS