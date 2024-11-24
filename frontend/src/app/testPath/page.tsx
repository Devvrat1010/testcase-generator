"use client";
export default function testPath() {
    const testApi = async () => {
        try {
            const res = await fetch("http://3.110.153.172:8080/testcase");
            const data = await res.json();
            console.log(data);
        } catch (error) {
            console.log(error);
        }
    };
    return (
        <div>
            <button onClick={testApi}> Test Api </button>
            <p>testPath</p>
        </div>
    );
}