import { Link, Head } from "@inertiajs/react";
import TextInput from "@/Components/TextInput";
import InputLabel from "@/Components/InputLabel";
import Button from "@/Components/Button";

const Register = () => {
    return (
        <>
            <Head title="Register" />
            <div className="mx-auto max-w-screen min-h-screen bg-black text-white md:px-10 px-3">
                <div className="fixed top-[-50px] hidden lg:block">
                    <img
                        src="/images/signup-image.png"
                        className="hidden laptopLg:block laptopLg:max-w-[450px] laptopXl:max-w-[640px]"
                        alt=""
                    />
                </div>
                <div className="py-24 flex laptopLg:ml-[680px] laptopXl:ml-[870px]">
                    <div>
                        <div className="">
                            <div className="font-semibold text-[26px] mb-3">
                                Register
                            </div>
                            <p className="text-base text-[#767676] leading-7 mb-3">
                                Explore our new movies and get <br />
                                the better insight for your life
                            </p>
                        </div>
                        <form className="w-[370px]">
                            <div className="flex flex-col gap-6">
                                <div>
                                    <InputLabel
                                        forInput="fullname"
                                        value="Full Name"
                                    />
                                    <TextInput
                                        type="text"
                                        name="fullname"
                                        placeholder="Your fullname..."
                                        autoComplete="fullname"
                                    />
                                </div>
                                <div>
                                    <InputLabel
                                        forInput="email"
                                        value="Email Address"
                                    />
                                    <TextInput
                                        type="email"
                                        name="email"
                                        placeholder="Your Email Address"
                                        autoComplete="email"
                                    />
                                </div>
                                <div>
                                    <InputLabel
                                        forInput="password"
                                        value="Password"
                                    />
                                    <TextInput
                                        type="password"
                                        name="password"
                                        placeholder="Your Password"
                                        autoComplete="password"
                                    />
                                </div>
                            </div>
                            <div className="grid space-y-[14px] mt-[30px]">
                                <Button type="button" variant="primary">
                                    <span className="text-base font-semibold">
                                        Sign Up
                                    </span>
                                </Button>
                                <Link href={route("prototype.login")}>
                                    <Button
                                        type="button"
                                        variant="light-outline"
                                    >
                                        <span className="text-base text-white">
                                            Sign In to My Account
                                        </span>
                                    </Button>
                                </Link>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Register;
