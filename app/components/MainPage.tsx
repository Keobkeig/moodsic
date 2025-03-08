import React from 'react';
import { Card, CardContent } from '@/components/ui/card';

const MainPage = () => {
    return (
        <div className="min-h-screen bg-black text-white">
            <div className="p-6 space-y-8">
                {/* Filter nav */}
                <div className="flex space-x-2 mb-6">
                    <button className="bg-white text-black font-medium rounded-full px-4 py-1 text-lg">All</button>
                    <button className="bg-zinc-800 text-white font-medium rounded-full px-4 py-1 text-lg">Music</button>
                    <button className="bg-zinc-800 text-white font-medium rounded-full px-4 py-1 text-lg">Podcasts</button>
                    <button className="bg-zinc-800 text-white font-medium rounded-full px-4 py-1 text-lg">Audiobooks</button>
                </div>

                {/* Top row of cards */}
                <div className="grid grid-cols-4 gap-4">
                    <Card className="bg-zinc-800 border-none rounded-lg overflow-hidden">
                        <CardContent className="p-4 flex items-center space-x-3">
                            <div className="w-12 h-12 bg-gray-600 flex-shrink-0 rounded-md">
                                <div className="h-full w-full flex justify-center items-center">
                                    <div className="bg-gray-500 h-8 w-8"></div>
                                </div>
                            </div>
                            <div className="font-bold text-white text-lg">Classical Ballet</div>
                        </CardContent>
                    </Card>
                    
                    <Card className="bg-zinc-800 border-none rounded-lg overflow-hidden">
                        <CardContent className="p-4 flex items-center space-x-3">
                            <div className="w-12 h-12 bg-gray-600 flex-shrink-0 rounded-md"></div>
                            <div className="font-bold text-white text-lg">Expresso Depresso</div>
                        </CardContent>
                    </Card>
                    
                    <Card className="bg-zinc-800 border-none rounded-lg overflow-hidden">
                        <CardContent className="p-4 flex items-center space-x-3">
                            <div className="w-12 h-12 bg-gray-600 flex-shrink-0 rounded-md"></div>
                            <div className="font-bold text-white text-lg">Old Italian classics 🇮🇹</div>
                        </CardContent>
                    </Card>
                    
                    <Card className="bg-zinc-800 border-none rounded-lg overflow-hidden">
                        <CardContent className="p-4 flex items-center space-x-3">
                            <div className="w-12 h-12 bg-blue-600 flex-shrink-0 rounded-md"></div>
                            <div className="font-bold text-white text-lg">A Cozy Campervan in Rainy Ireland | Relaxing...</div>
                        </CardContent>
                    </Card>
                </div>

                {/* Second row of cards */}
                <div className="grid grid-cols-4 gap-4">
                    <Card className="bg-zinc-800 border-none rounded-lg overflow-hidden">
                        <CardContent className="p-4 flex items-center space-x-3">
                            <div className="w-12 h-12 bg-cyan-600 flex-shrink-0 rounded-md"></div>
                            <div className="font-bold text-white text-lg">Daily Mix 1</div>
                        </CardContent>
                    </Card>
                    
                    <Card className="bg-zinc-800 border-none rounded-lg overflow-hidden">
                        <CardContent className="p-4 flex items-center space-x-3">
                            <div className="w-12 h-12 bg-gray-600 flex-shrink-0 rounded-md"></div>
                            <div className="font-bold text-white text-lg">This Is The Weeknd</div>
                        </CardContent>
                    </Card>
                    
                    <Card className="bg-zinc-800 border-none rounded-lg overflow-hidden">
                        <CardContent className="p-4 flex items-center space-x-3">
                            <div className="w-12 h-12 bg-pink-300 flex-shrink-0 rounded-md"></div>
                            <div className="font-bold text-white text-lg">This Is SZA</div>
                        </CardContent>
                    </Card>
                    
                    <Card className="bg-zinc-800 border-none rounded-lg overflow-hidden">
                        <CardContent className="p-4 flex items-center space-x-3">
                            <div className="w-12 h-12 bg-gray-600 flex-shrink-0 rounded-md"></div>
                            <div className="font-bold text-white text-lg">TYLA</div>
                        </CardContent>
                    </Card>
                </div>

                {/* Made For You section */}
                <div className="mt-8">
                    <div className="flex justify-between items-center mb-4">
                        <h2 className="text-2xl font-bold text-lg">Made For Keobkeig</h2>
                        <button className="text-gray-400 hover:text-white text-lg">Show all</button>
                    </div>
                    
                    <div className="grid grid-cols-6 gap-4">
                        {/* Daily Mix 02 */}
                        <Card className="bg-zinc-900 border-none rounded-lg overflow-hidden">
                            <CardContent className="p-0">
                                <div className="relative">
                                    <img src="/daily2.png" alt="Daily Mix 02" className="w-full h-40 object-cover" />
                                    <div className="absolute bottom-0 left-0 bg-yellow-400 text-black px-2 py-1 font-bold text-lg">Daily Mix</div>
                                    <div className="absolute bottom-0 right-0 bg-yellow-400 text-black px-3 py-1 font-bold text-xl">02</div>
                                </div>
                                <div className="p-3 text-sm">
                                    <p className="text-white text-lg">The Weeknd, Daniel Caesar, Frank Ocean and more</p>
                                </div>
                            </CardContent>
                        </Card>
                        
                        {/* Daily Mix 03 */}
                        <Card className="bg-zinc-900 border-none rounded-lg overflow-hidden">
                            <CardContent className="p-0">
                                <div className="relative">
                                    <img src="/daily3.png" alt="Daily Mix 03" className="w-full h-40 object-cover" />
                                    <div className="absolute bottom-0 left-0 bg-red-500 text-black px-2 py-1 font-bold text-lg">Daily Mix</div>
                                    <div className="absolute bottom-0 right-0 bg-red-500 text-black px-3 py-1 font-bold text-xl">03</div>
                                </div>
                                <div className="p-3 text-sm">
                                    <p className="text-white text-lg">SZA, Brent Faiyaz, Mimmi Bangoura and more</p>
                                </div>
                            </CardContent>
                        </Card>
                        
                        {/* Daily Mix 04 */}
                        <Card className="bg-zinc-900 border-none rounded-lg overflow-hidden">
                            <CardContent className="p-0">
                                <div className="relative">
                                    <img src="/daily4.png" alt="Daily Mix 04" className="w-full h-40 object-cover" />
                                    <div className="absolute bottom-0 left-0 bg-pink-400 text-black px-2 py-1 font-bold text-lg">Daily Mix</div>
                                    <div className="absolute bottom-0 right-0 bg-pink-400 text-black px-3 py-1 font-bold text-xl">04</div>
                                </div>
                                <div className="p-3 text-sm">
                                    <p className="text-white text-lg">DPR LIVE, Don Toliver, TOMORROW X TOGETHER</p>
                                </div>
                            </CardContent>
                        </Card>
                        
                        {/* Daily Mix 05 */}
                        <Card className="bg-zinc-900 border-none rounded-lg overflow-hidden">
                            <CardContent className="p-0">
                                <div className="relative">
                                    <img src="/daily5.png" alt="Daily Mix 05" className="w-full h-40 object-cover" />
                                    <div className="absolute bottom-0 left-0 bg-yellow-400 text-black px-2 py-1 font-bold text-lg">Daily Mix</div>
                                    <div className="absolute bottom-0 right-0 bg-yellow-400 text-black px-3 py-1 font-bold text-xl">05</div>
                                </div>
                                <div className="p-3 text-sm">
                                    <p className="text-white text-lg">PARTYNEXTDOOR, Che Ecru, Sonder and more</p>
                                </div>
                            </CardContent>
                        </Card>
                        
                        {/* Daily Mix 06 */}
                        <Card className="bg-zinc-900 border-none rounded-lg overflow-hidden">
                            <CardContent className="p-0">
                                <div className="relative">
                                    <img src="/daily6.png" alt="Daily Mix 06" className="w-full h-40 object-cover" />
                                    <div className="absolute bottom-0 left-0 bg-purple-400 text-black px-2 py-1 font-bold text-lg">Daily Mix</div>
                                    <div className="absolute bottom-0 right-0 bg-purple-400 text-black px-3 py-1 font-bold text-xl">06</div>
                                </div>
                                <div className="p-3 text-sm">
                                    <p className="text-white text-lg">Jay Chou, Joker Xue, en and more</p>
                                </div>
                            </CardContent>
                        </Card>
                        
                        {/* Discover Weekly */}
                        <Card className="bg-zinc-900 border-none rounded-lg overflow-hidden">
                            <CardContent className="p-0">
                                <div className="relative">
                                    <img src="/discoverweekly.png" alt="Discover Weekly" className="w-full h-40 object-cover" />
                                    <div className="absolute bottom-0 left-0 bg-purple-500 text-white px-2 py-1 font-bold text-lg">Discover Weekly</div>
                                </div>
                                <div className="p-3 text-sm">
                                    <p className="text-white text-lg">Your weekly mix of fresh music. Enjoy</p>
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                </div>
                
                {/* Discover Picks section */}
                <div className="mt-8">
                    <div className="flex justify-between items-center mb-4">
                        <h2 className="text-2xl font-bold text-lg">Discover picks for you</h2>
                        <button className="text-gray-400 hover:text-white text-lg">Show all</button>
                    </div>
                    
                    <div className="grid grid-cols-6 gap-4">
                        {/* Album covers */}
                        {[1, 2, 3, 4, 5, 6].map((item) => (
                            <Card key={item} className="bg-zinc-900 border-none rounded-lg overflow-hidden">
                                <CardContent className="p-0">
                                    <img src={`/daily${item}.png`} alt={`Album ${item}`} className="w-full h-40 object-cover" />
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MainPage;