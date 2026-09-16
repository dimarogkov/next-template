import { Progress } from '@components/atoms';

export const ProgressDemo = () => {
    return (
        <>
            <div className="relative mb-5 flex w-full flex-col gap-2.5 last:mb-0">
                <Progress value={25} />
                <Progress value={50} />
                <Progress value={75} />
                <Progress value={100} />
            </div>

            <div className="flex w-full flex-wrap gap-5">
                <Progress type="circle" value={25} />
                <Progress type="circle" value={50} />
                <Progress type="circle" value={75} />
                <Progress type="circle" value={100} />
            </div>
        </>
    );
};
