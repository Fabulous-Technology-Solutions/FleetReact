import React, {useState} from 'react'
import { MessageIcon, PhoneIcon, UploadIcon } from '../../../CustomIcons'
import ProfileImg from '../../../assets/images/profile.png'

export const ProfileSetting = () => {
    const [selectedImage, setSelectedImage] = useState(ProfileImg);

    const handleImageChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = () => {
                setSelectedImage(reader.result);
            };
            reader.readAsDataURL(file);
        }
    };

    return (
        <div className='max-w-3xl mx-auto'>
            <h4 className='c-primary font-semibold text-xl'>Personal Info</h4>
            <p className='c-secondary text-sm'>Update your photo and personal details here.</p>
            <div className='bg-sidebar mt-3 rounded-2xl'>
                <form action="">
                    <div className="grid md:grid-cols-2 gap-8 sm:p-7 p-4 border-b border-main">
                        <div>
                            <label htmlFor="" className='c-secondary font-medium text-sm mb-1'>First name</label>
                            <input type="text" name="" id="" className='c-primary w-full border border-main py-2 px-3 rounded-xl outline-0' placeholder='Oliva' />
                        </div>
                        <div>
                            <label htmlFor="" className='c-secondary font-medium text-sm mb-1'>Last name</label>
                            <input type="text" name="" id="" className='c-primary w-full border border-main py-2 px-3 rounded-xl outline-0' placeholder='Rhye' />
                        </div>
                        <div className="md:col-span-2">
                            <label htmlFor="" className='c-secondary font-medium text-sm mb-1'>Email</label>
                            <div className='c-primary w-full border border-main py-2 px-3 rounded-xl outline-0 flex items-center gap-2'>
                                <MessageIcon className='c-secondary text-xl' />
                                <input type="email" name="" id="" className='c-primary w-full outline-0' placeholder='olivia@untitledui.com' />
                            </div>
                        </div>
                        <div className="md:col-span-2">
                            <label htmlFor="" className='c-secondary font-medium text-sm mb-1'>Phone Number</label>
                            <div className='c-primary w-full border border-main py-2 px-3 rounded-xl outline-0 flex items-center gap-2'>
                                <PhoneIcon className='c-secondary text-xl' />
                                <input type="text" name="" id="" className='c-primary w-full outline-0' placeholder='+92 312 3456 789' />
                            </div>
                        </div>
                        <div className='md:col-span-2 md:flex gap-4'>
                            <div>
                                <img src={selectedImage} alt="Profile Preview" className='size-18 rounded-full max-w-18 mx-auto' />
                            </div>
                            <div className='border border-main rounded-2xl p-3 w-full md:mt-0 mt-3'>
                                <label htmlFor="upload">
                                    <div className='w-14 h-14 bg-cardcontainer flex items-center justify-center mx-auto rounded-full'>
                                        <div className='w-10 h-10 bg-sidebar flex items-center justify-center mx-auto rounded-full shadow-sm'>
                                            <UploadIcon className='c-primary text-3xl' />
                                        </div>
                                    </div>
                                    <div className='flex flex-wrap justify-center gap-1 mt-2 '>
                                        <p className='text-center text-sm text-[var(--catblue)]'>Click to upload</p>
                                        <p className='text-center text-sm c-secondary'>or drag and drop</p>
                                    </div>
                                    <p className='text-center text-sm c-secondary'>SVG, PNG, JPG or GIF (max. 800x400px)</p>
                                </label>
                                <input type="file" name="" id="upload" className='hidden' onChange={handleImageChange} />
                            </div>
                        </div>
                        <div className='md:col-span-2'>
                            <label htmlFor="" className='c-secondary font-medium text-sm mb-1'>Company name</label>
                            <input type="text" name="" id="" className='c-primary w-full border border-main py-2 px-3 rounded-xl outline-0' placeholder='Fleet Logistics Inc.' />
                        </div>
                        <div className='md:col-span-2'>
                            <label htmlFor="" className='c-secondary font-medium text-sm mb-1'>Time Zone</label>
                            <select name="" id="" className='c-primary w-full border border-main py-2 px-3 rounded-xl outline-0'>
                                <option value="">UTC/GMT</option>
                            </select>
                        </div>
                    </div>
                    <div className='p-4 mt-3 flex gap-2 justify-end'>
                        <button className='c-primary flex items-center gap-2 text-sm font-semibold py-3 px-4 rounded-[12px] border border-main'>Cancel</button>
                        <button className="bg-navlink py-3 c-inverted font-semibold border border-[#60A5FA] px-5 rounded-xl">
                            Update Profile{" "}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}
