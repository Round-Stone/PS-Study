const DEPLOY_RATE = 100;
const DEFAULT_DAY = 1;

const solution = (progresses, speeds) => {
    const listOfRemainedDays = progresses.map((progress, idx) => Math.ceil((DEPLOY_RATE - progress) / speeds[idx]));
    let prevRemainedDay = listOfRemainedDays[0];
    
    const result = listOfRemainedDays.reduce((acc, remainedDay, idx) => {
        if (idx === 0) return [DEFAULT_DAY];
        
        if (remainedDay <= prevRemainedDay) acc[acc.length-1]++;
        else {
            acc.push(DEFAULT_DAY);
            prevRemainedDay = listOfRemainedDays[idx];
        }
        
        return acc;
    }, []);
    
    return result;
}