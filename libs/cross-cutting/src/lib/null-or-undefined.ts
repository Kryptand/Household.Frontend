export function isNoU(instance:any,origin?:string){
	if(instance===null||instance===undefined){
		throw new Error(`${origin?origin:''}-instance is null-or-undefined`)
	}
	return;
}