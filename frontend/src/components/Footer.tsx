'use client'

import { Camera, Computer, Mic, NoMic, Phone } from "@/Icons";
import Container from "./Container";
import { useState } from "react";

export default function Footer() {
    //eventos de funcion de eventos al clicar los botones
    const [isMuted, setIsMuted] = useState(false);
    const [isCameraOff, setIsCameraOff] = useState(false);
    const [isScreenSharing, setIsScreenSharing] = useState(false);

    const date = new Date();
    //Forma uno
    // const horas = date.getHours();
    // const minutos = date.getMinutes();
    // const segundos = date.getSeconds();
    // const infhoras = 'Sao as ' + horas + ':' + minutos + ':' + segundos;

    // Forma dos
    const horas = date.getHours().toString().padStart(2, '0') + ':';
    const minutos = date.getMinutes().toString().padStart(2, '0');
    return (
        <div className="fixed flex items-center bottom-0 bg-black py-2 w-full">
            <Container>
                <div className="grid grid-cols-3">
                    <span className="text-xl">
                        {/* /*infhoras*/}
                        {horas}
                        {minutos}

                    </span>
                    <div className="flex space-x-6 justify-center">
                       
                                    <Camera className=" h-10 w-10 text-white p-2 cursor-pointer bg-gray-950 rounded-md" />
                                    <Computer className=" h-10 w-10 text-white p-2 cursor-pointer bg-gray-950 rounded-md" />
                                    <Phone className=" h-10 w-10 text-white p-2 cursor-pointer bg-primary rounded-md hover:bg-red-500" />
                                </div>
                            </div>

            </Container>
                </div>
                )
}