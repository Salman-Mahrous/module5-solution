var names=new Array();
names[0]="john";
names[1]="jena";
names[2]="abdulrahman";
names[3]="fawzi";
names[4]="fattom";
names[5]="yara";
names[6]="sena";
names[7]="layan";
names[8]="alen";
names[9]="mera";

for (var i = 0; i < names.length; i++) {
	if(names[i].charAt(0)==='J'|| names[i].charAt(0)==='f'){
        console.log("Goodbye "+ names[i])
	}
	else{
		console.log("Hello "+ names[i])
	}
}