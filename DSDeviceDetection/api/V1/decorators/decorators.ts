﻿

export function getMethodName(target, name, desc) {
	var method = desc.value;
	desc.value = function () {
		this._currentMethod = name;
		method.apply(this, arguments);
	}
}