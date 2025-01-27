'use client';
import {useCallback, useEffect, useState} from "react";
import {create, getData} from "@/app/actions";
import debounce from "lodash.debounce";
import SaveIcon from '@mui/icons-material/Save';

export default function Board() {

    const [formData, setFormData] = useState({
        day1dom1: '',
        day1dom2: '',
        day1bol1: '',
        day1bol2: '',
        day2dom1: '',
        day2dom2: '',
        day2dom3: '',
        day2dom4: '',
        day2bol1: '',
        day2bol2: '',
        day2bol3: '',
        day2bol4: '',
        day1result1: '',
        day1result2: '',
        day2result1: '',
        day2result2: '',
        day2result3: ''
        // Add other form fields as needed
    });

    useEffect(() => {
        async function fetchData() {
            const data = await getData();
            console.log(data);
            setFormData({
                day1dom1: data.day1dom1,
                day1dom2: data.day1dom2,
                day1bol1: data.day1bol1,
                day1bol2: data.day1bol2,

                day2dom1: data.day2dom1,
                day2dom2: data.day2dom2,
                day2dom3: data.day2dom3,
                day2dom4: data.day2dom4,

                day2bol1: data.day2bol1,
                day2bol2: data.day2bol2,
                day2bol3: data.day2bol3,
                day2bol4: data.day2bol4,

                day1result1: data.day1result1,
                day1result2: data.day1result2,
                day2result1: data.day2result1,
                day2result2: data.day2result2,
                day2result3: data.day2result3,

                // Set other form fields as needed
            });
        }
        fetchData();
    }, []);

    const debouncedSave = useCallback(debounce(async formData =>
        await create(formData), 1000), []);

    const handleChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
        const formDataObj = new FormData();
        Object.entries(formData).forEach(([key, value]) => {
            formDataObj.append(key, value);
        });
        await debouncedSave(formDataObj);
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const formDataObj = new FormData();
        Object.entries(formData).forEach(([key, value]) => {
            formDataObj.append(key, value);
        });
        await create(formDataObj);
    };

    return(
        <form onSubmit={handleSubmit}>
        <div className="flex h-screen">

            <div className="flex flex-col m-1 flex-grow">
                <div className="flex flex-row justify-center h-1/5 mb-2">
                    <div className="flex justify-end w-1/3 "><img src="/logos/davis-cup.png" className="object-contain"></img></div>
                    <div className="flex justify-center w-1/3 mx-32 "><img src="/logos/itf.png"></img></div>
                    <div className="flex justify-start w-1/3 "><img src="/logos/fedotenis.png" className="object-contain"></img></div>
                </div>
                <main className="flex flex-col justify-center flex-grow">

                    <div className="flex flex-row h-28 w-auto">
                        <div className="flex justify-end flex-1"><img src="/flags/dom.png"></img></div>
                        <div className="flex flex-col justify-center w-fit mx-10">
                            <div className="flex flex-row justify-center">
                                <div className="flex text-6xl tracking-wide">DOM</div>
                                <div className="flex text-xl mx-5 my-auto">vs</div>
                                <div className="flex text-6xl tracking-wide">BOL</div>
                            </div>
                            <div className="border-t-4 border-white-300 w-full font-bold mx-auto mb-5"></div>
                            <div className="flex justify-center text-2xl tracking-wide">PLAY-OFF DE GRUPO MUNDIAL II | 1-2 FEBRERO, 2025</div>

                        </div>
                        <div className="flex justify-start flex-1"><img src="/flags/bol.png"></img></div>
                    </div>

                    <div className="flex flex-col justify-center flex-grow w-10/12 mx-auto">

                        <div className="grid grid-cols-12 gap-2 mt-2">
                            <div className="text-2xl tracking-wide content-center pt-20">Día 1</div>
                            <div className="col-span-11 grid grid-rows-3 grid-flow-col gap-x-20 gap-y-2 mt-6">
                                <div className="text-2xl tracking-wide text-center">Dominicana</div>
                                <div className="content-center"><input type="text" id="day1dom1" name="day1dom1" value={formData.day1dom1} onChange={handleChange} className="w-64 h-10"></input></div>
                                <div className="content-center"><input type="text" id="day1dom2" name="day1dom2" value={formData.day1dom2} onChange={handleChange} className="w-64 h-10"></input></div>
                                <div className="row-start-2 text-2xl tracking-wide content-center">VS</div>
                                <div className="text-2xl tracking-wide content-center">VS</div>
                                <div className="text-2xl tracking-wide text-center">Bolivia</div>
                                <div className="content-center"><input type="text" id="day1bol1" name="day1bol1" value={formData.day1bol1} onChange={handleChange} className="w-64 h-10"></input></div>
                                <div className="content-center"><input type="text" id="day1bol2" name="day1bol2" value={formData.day1bol2} onChange={handleChange} className="w-64 h-10"></input></div>
                                <div className="row-start-2 content-center"><input type="text" id="day1result1" name="day1result1" value={formData.day1result1} onChange={handleChange} className="w-64 h-10"></input></div>
                                <div className="content-center"><input type="text" id="day1result2" name="day1result2" value={formData.day1result2} onChange={handleChange} className="w-64 h-10"></input></div>
                            </div>
                        </div>

                        <div className="border-t-4 border-white-300 w-full font-bold mx-auto mt-5"></div>

                        <div className="grid grid-cols-12 gap-2">
                            <div className="row-span-4 text-2xl tracking-wide content-center">Día 2</div>
                            <div className="col-span-11 grid grid-rows-2 grid-flow-col gap-x-20 gap-y-1 mt-6">
                                <div className="content-center"><input type="text" id="day2dom1" name="day2dom1" value={formData.day2dom1} onChange={handleChange} className="w-64 h-10"></input></div>
                                <div className="content-center"><input type="text" id="day2dom2" name="day2dom2" value={formData.day2dom2} onChange={handleChange} className="w-64 h-10"></input></div>
                                <div className="row-span-2 text-2xl tracking-wide content-center">VS</div>
                                <div className="content-center"><input type="text" id="day2bol1" name="day2bol1" value={formData.day2bol1} onChange={handleChange} className="w-64 h-10"></input></div>
                                <div className="content-center"><input type="text" id="day2bol2" name="day2bol2" value={formData.day2bol2} onChange={handleChange} className="w-64 h-10"></input></div>
                                <div className="row-span-2 content-center"><input type="text" id="day2result1" name="day2result1" value={formData.day2result1} onChange={handleChange}
                                                                                  className="w-64 h-10"></input></div>
                            </div>


                            <div className="col-span-11 grid grid-rows-2 grid-flow-col gap-x-20 gap-y-2 mt-4">
                                <div className="content-center"><input type="text" id="day2dom3" name="day2dom3" value={formData.day2dom3} onChange={handleChange} className="w-64 h-10"></input></div>
                                <div className="content-center"><input type="text" id="day2dom4" name="day2dom4" value={formData.day2dom4} onChange={handleChange} className="w-64 h-10"></input></div>
                                <div className="text-2xl tracking-wide content-center">VS</div>
                                <div className="text-2xl tracking-wide content-center">VS</div>
                                <div className="content-center"><input type="text" id="day2bol3" name="day2bol3" value={formData.day2bol3} onChange={handleChange} className="w-64 h-10"></input></div>
                                <div className="content-center"><input type="text" id="day2bol4" name="day2bol4" value={formData.day2bol4} onChange={handleChange} className="w-64 h-10"></input></div>
                                <div className="content-center"><input type="text" id="day2result2" name="day2result2" value={formData.day2result2} onChange={handleChange} className="w-64 h-10"></input></div>
                                <div className="content-center"><input type="text" id="day2result3" name="day2result3" value={formData.day2result3} onChange={handleChange} className="w-64 h-10"></input></div>
                            </div>
                        </div>
                    </div>
                </main>

                <div className="w-full">
                    <button className="float-right" type="submit"><SaveIcon/></button>
                </div>
            </div>

        </div>
        </form>
    )
}